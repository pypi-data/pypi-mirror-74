import matplotlib.pyplot as plt
import scipy.ndimage as ndi

from ._general import imgplot


def filterplot(
    data,
    filter="gaussian",
    cmap=None,
    vmin=None,
    vmax=None,
    scalebar=False,
    dx=None,
    units=None,
    scalebar_params=None,
    cbar=True,
    cbar_label=None,
    cbar_fontdict=None,
    showticks=False,
    title1=None,
    title2=None,
    title_fontdict=None,
    **kwargs
):

    # kwargs across filters
    axis = kwargs.get("axis", -1)
    mode = kwargs.get("mode", "reflect")
    cval = kwargs.get("cval", 0.0)
    size = kwargs.get("size", 5)
    footprint = kwargs.get("footprint", None)
    origin = kwargs.get("origin", 0)
    sigma = kwargs.get("sigma", 5)
    order = kwargs.get("order", 0)
    truncate = kwargs.get("truncate", 4.0)

    if filter == "sobel":
        filtered_data = ndi.sobel(data, axis=axis, mode=mode, cval=cval)

    elif filter == "gaussian":
        filtered_data = ndi.gaussian_filter(
            data, sigma=sigma, order=order, mode=mode, cval=cval, truncate=truncate
        )

    elif filter == "median":
        filtered_data = ndi.median_filter(
            data, size=size, mode=mode, cval=cval, origin=origin
        )

    elif filter == "max":
        filtered_data = ndi.maximum_filter(
            data, size=size, footprint=footprint, mode=mode, cval=cval, origin=origin
        )

    f, ax = plt.subplots(1, 2)

    imgplot(
        data,
        ax=ax[0],
        cmap=cmap,
        vmin=vmin,
        vmax=vmax,
        scalebar=scalebar,
        dx=dx,
        units=units,
        scalebar_params=scalebar_params,
        cbar=cbar,
        cbar_label=cbar_label,
        cbar_fontdict=cbar_fontdict,
        showticks=showticks,
        title=title1,
        title_fontdict=title_fontdict,
    )
    imgplot(
        filtered_data,
        ax=ax[1],
        cmap=cmap,
        vmin=vmin,
        vmax=vmax,
        scalebar=scalebar,
        dx=dx,
        units=units,
        scalebar_params=scalebar_params,
        cbar=cbar,
        cbar_label=cbar_label,
        cbar_fontdict=cbar_fontdict,
        showticks=showticks,
        title=title2,
        title_fontdict=title_fontdict,
    )

    return f, ax, filtered_data
