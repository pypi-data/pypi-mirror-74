import autolens as al
import autolens.plot as aplt

from test_autolens.simulators.imaging import instrument_util

# In this tutorial, we'll introduce a new pixelization, called an adaptive-pixelization. This pixelization doesn't use
# uniform grid of rectangular pixels, but instead uses ir'Voronoi' pixels. So, why would we want to do that?
# Lets take another look at the rectangular grid, and think about its weakness.

# Lets quickly remind ourselves of the image, and the 3.0" circular mask we'll use to mask it.
imaging = instrument_util.load_test_imaging(
    data_name="lens_sie__source_cuspy", instrument="hst"
)
mask = al.Mask.circular(
    shape_2d=imaging.shape_2d,
    pixel_scales=imaging.pixel_scales,
    radius=3.0,
    centre=(0.0, 0.0),
    sub_size=4,
)

lens_galaxy = al.Galaxy(
    redshift=0.5, mass=al.mp.SphericalIsothermal(centre=(0.1, 0.2), einstein_radius=1.5)
)

source_galaxy = al.Galaxy(
    redshift=1.0,
    pixelization=al.pix.VoronoiMagnification(shape=(20, 20)),
    regularization=al.reg.Constant(coefficient=1.0),
)

masked_imaging = al.MaskedImaging(imaging=imaging, mask=mask)

tracer = al.Tracer.from_galaxies(galaxies=[lens_galaxy, source_galaxy])
fit = al.FitImaging(masked_imaging=masked_imaging, tracer=tracer)

print(fit.inversion.reconstruction)
print(fit.inversion.mapper)
print(fit.inversion.mapper.pixelization_grid)

print(fit.inversion.interpolated_reconstruction_from_shape_2d())

# aplt.Inversion.interpolated_reconstruction(inversion=fit.inversion)

# aplt.FitImaging.subplot_of_plane(
#     fit=fit, plane_index=1,
# )
#
# aplt.FitImaging.subplot_of_plane(
#     fit=fit,
#     plane_index=1,
# )

aplt.FitImaging.subplot_fit_imaging(fit=fit)
aplt.Inversion.subplot_inversion(inversion=fit.inversion, caustics=tracer.caustics)
