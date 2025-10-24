import './CSS/Projectthree.css';
import PhotographyHero from '/Images/PhotographyHero.jpg';
import { Link } from 'react-router-dom';

function Projectthree() {
return(
<section className="projecthero">
    <div className='index'>
<div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Interaction & Experience Design</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[University of Limerick]</h3>
        <h3 className='projectIntroCentre'>[2025]</h3>
        <h3 className='projectIntroRight'>[Masters]</h3>
        </div>
    </div>
</div>

<div className='projectDescription'>
    <div className='firstText'>
        <ul className='skillList'>
            <h3>[Software]</h3>
            <li>Visual Studio Code</li>
            <li>Adobe Creative Suite</li> 
            <li>Arduino IDE</li>
            <h3>[Skills]</h3>
            <li>Interaction Design</li>
            <li>User Experience</li>
            <li>Physical Computing</li>
        </ul>

    <p>I have begun my Masters of Science in Interaction and Experience Design at the University of Limerick. I decided to pursue further education in this area as I have always found how we interact technology very interesting and I enjoy wondering how do we make those experiences better.</p>
    </div>

</div>


<div className='projectImageClick'>
    <Link to="/Photography">
      <div className="imageOverlayContainer">
        <img src={PhotographyHero} alt="PhotographyHero" className="projectImage" />
        <div className="overlayText">Photography</div>
      </div>
    </Link>
  </div>
</div>
</section>
);
}

export default Projectthree;