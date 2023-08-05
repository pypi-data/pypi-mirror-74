"""
Functions to plot and analyze reaction/diffusion-related results
"""

from __future__ import unicode_literals
from __future__ import print_function
from __future__ import division
from __future__ import absolute_import

try:
    basestring
except NameError:
    basestring = str

from future import standard_library
standard_library.install_aliases()
from netpyne import __gui__

if __gui__:
    import matplotlib.pyplot as plt
    from matplotlib_scalebar.scalebar import ScaleBar 
from .utils import exception, _showFigure, _saveFigData

# -------------------------------------------------------------------------------------------------------------------
## Plot RxD concentration
# -------------------------------------------------------------------------------------------------------------------
@exception
def plotRxDConcentration(speciesLabel, regionLabel, plane='xy', figSize=(5,10), fontSize=10, scalebar=False, title=True, showFig=True, saveFig=True):
    
    from .. import sim
    
    # set font size
    plt.rcParams.update({'font.size': fontSize})

    species = sim.net.rxd['species'][speciesLabel]['hObj']
    region = sim.net.rxd['regions'][regionLabel]['hObj']
    plane2mean = {'xz': 1, 'xy': 2}
    
    fig = plt.figure(figsize=figSize)
    plt.imshow(species[region].states3d[:].mean(plane2mean[plane]).T, interpolation='nearest', origin='upper')  #  extent=k[extracellular].extent('xy')
    
    ax = plt.gca()
    if scalebar:
        ax.xaxis.set_visible(False)
        ax.yaxis.set_visible(False)
        sb = ScaleBar(1e-6)
        sb.location = 'lower left'
        ax.add_artist(sb)
    
    plt.colorbar(label='[' + species.name + '] (mM)')
    plt.xlabel(plane[0] + ' location (um)')
    plt.ylabel(plane[1] + ' location (um)')  
    if title:
        plt.title('RxD: ' + species.name +  ' concentration')
    plt.tight_layout()
    
    # show fig 
    if showFig: _showFigure()

    # save figure
    if saveFig: 
        if isinstance(saveFig, basestring):
            filename = saveFig
        else:
            filename = sim.cfg.filename + '_rxd_concentration.png'
        plt.savefig(filename)
    
    return fig, {'data': species[region].states3d[:].mean(plane2mean[plane])}


