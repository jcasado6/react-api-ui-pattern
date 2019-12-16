import React from 'react';

const Modal = props => {
  
  function displayInfo () {
    switch(props.modalInfo) {
      case 'Modal A':
        return <div className="modal-info">
                <h2>The Infrared Visible Andromeda</h2>
                <p>This remarkable synthetic color composite image was assembled from archives of visible light and infrared astronomy image data. The field of view spans the Andromeda Galaxy (M31), a massive spiral a mere 2.5 million light-years away. In fact, with over twice the diameter of our own Milky Way, Andromeda is the largest nearby galaxy. Andromeda's population of bright young blue stars lie along its sweeping spiral arms, with the telltale reddish glow of star forming regions traced in space- and ground-based visible light data. But infrared data from the Spitzer Space Telescope, also blended directly into the detailed composite's red and green color channels, highlight the lumpy dust lanes warmed by the young stars as they wind ever closer to the galaxy's core. Otherwise invisible at optical wavelengths, the warm dust takes on orange hues. Two smaller companion galaxies, M110 (below) and M32 (above) are also included in the frame.</p>
              </div>
      case 'Modal B':
        return <div className="modal-info">
                <h2>The Crab Nebula from VLT</h2>
                <p>The Crab Nebula, filled with mysterious filaments, is the result of a star that was seen to explode in 1054 AD.  This spectacular supernova explosion was recorded by Chinese and (quite probably) Anasazi Indian astronomers.  The filaments are mysterious because they appear to have less mass than expelled in the original supernova and higher speed than expected from a free explosion. In the above picture taken recently from a Very Large Telescope, the color indicates what is happening to the electrons in different parts of the Crab Nebula. Red indicates the electrons are recombining with protons to form neutral hydrogen, while blue indicates the electrons are whirling around the magnetic field of the inner nebula.  In the nebula's very center lies a pulsar: a neutron star rotating, in this case, 30 times a second.</p>
              </div>
      case 'Modal C':
        return <div className="modal-info">
                <h2>Near the Center of the Lagoon Nebula</h2>
                <p>Stars are battling gas and dust in the Lagoon Nebula but the photographers are winning. Also known as M8, this photogenic nebula is visible even without binoculars towards the constellation of the Archer (Sagittarius). The energetic processes of star formation create not only the colors but the chaos. The glowing gas results from high-energy starlight striking interstellar hydrogen gas and trace amounts of sulfur, and oxygen gases. The dark dust filaments that lace M8 were created in the atmospheres of cool giant stars and in the debris from supernovae explosions. The light from M8 we see today left about 5,000 years ago. Light takes about 50 years to cross this section of M8.</p>
               </div>
      case 'Modal D':
        return <div className="modal-info">
          <h2>Jupiter Abyss</h2>
          <p>What's that black spot on Jupiter? No one is sure.  During the latest pass of NASA's Juno around Jupiter, the robotic spacecraft imaged an usually dark cloud feature informally dubbed the Abyss. Surrounding cloud patterns show the Abyss to be at the center of a vortex. Since dark features on Jupiter's atmosphere tend to run deeper than light features, the Abyss may really be the deep hole that it appears -- but without more evidence that remains conjecture.  The Abyss is surrounded by a complex of meandering clouds and other swirling storm systems, some of which are topped by light colored, high-altitude clouds.  The featured image was captured last month while Juno passed only about 15,000 kilometers above Jupiter's cloud tops.  The next close pass of Juno near Jupiter will be in July.</p>
        </div>
      case 'Modal E':
        return <div className="modal-info">
          <h2>Saturn in the Milky Way</h2>
          <p>Saturn is near opposition in planet Earth's sky. Rising at sunset and shining brightly throughout the night, it also lies near a line-of-sight to crowded starfields, nebulae, and obscuring dust clouds along the Milky Way. Whitish Saturn is up and left of center in this gorgeous central Milky Way skyscape, a two panel mosaic recorded earlier this month. You can find the bright planet above the bowl of the dusty Pipe nebula, and just beyond the end of a dark river to Antares, alpha star of the constellation Scorpius. For now the best views of the ringed giant planet are from the Saturn-orbiting Cassini spacecraft, though.  Diving close, Cassini's Grand Finale orbit number 8 is in progress.</p>
        </div>
      case 'Modal F':
        return <div className="modal-info">
          <h2>NGC 1309: Spiral Galaxy and Friends</h2>
          <p>A gorgeous spiral galaxy some 100 million light-years distant, NGC 1309 lies on the banks of the constellation of the River (Eridanus). NGC 1309 spans about 30,000 light-years, making it about one third the size of our larger Milky Way galaxy. Bluish clusters of young stars and dust lanes are seen to trace out NGC 1309's spiral arms as they wind around an older yellowish star population at its core. Not just another pretty face-on spiral galaxy, observations of NGC 1309's recent supernova and Cepheid variable stars contribute to the calibration of the expansion of the Universe. Still, after you get over this beautiful galaxy's grand design, check out the array of more distant background galaxies also recorded in this sharp, reprocessed,  Hubble Space Telescope view.</p>
        </div>
      case 'Modal G':
        return <div className="modal-info">
          <h2>RCW 79: Stars in a Bubble</h2>
          <p>A cosmic bubble of gas and dust, RCW 79 has grown to about 70 light-years in diameter, blown by the winds and radiation from hot young stars. Infrared light from the dust embedded in the nebula is tinted red in this gorgeous false-color view from the Spitzer Space Telescope. A good 17 thousand light-years away in the grand southern constellation Centaurus, the expanding nebula itself has triggered star formation as it plows into the gas and dust surrounding it. In fact, this penetrating infrared picture reveals groups of new stars as yellowish points scattered along the bubble's edge. One remarkable group still lies within its own natal bubble at about 7 o'clock (lower left), while another can be seen near the upper gap at about 3 o'clock (right) from the bubble's center.</p>
        </div>
      case 'Modal H':
        return <div className="modal-info">
          <h2>The Colorful Clouds of Rho Ophiuchi</h2>
          <p>This stunning mosiac of the sky around bright stars Antares (Alpha Scorpii) and Rho Ophiuchi reveals spectacular colors in a cosmic starscape. Near the top, Rho Ophiuchi and nearby stars are immersed in blue reflection nebulae - dust clouds that shine primarily by reflected starlight. Cool supergiant star Antares (lower left) is itself shedding the material that reflects the evolved star's yellowish hue. Characteristic of star forming regions, the telltale red emission from hydrogen gas also permeates the view along with dark, obscuring dust clouds seen in silhouette against the background stars and brighter nebulosities. About 500 light-years away, the Rho Ophiuchi star clouds, are well in front of the nearby globular star cluster M4, visible just below and right of center. The wide view spans about 6 degrees on the sky.</p>
        </div>
      default:
        return null
    }
  }

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }
  
  const divStyle = {
    display: props.displayModal ? 'block' : 'none',
  };

    return (
      <div 
        className="modal"
        onClick={ closeModal }
        style={divStyle}>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>

      </div>
    );
}

export default Modal;