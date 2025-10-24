import VideographyHero from '/Images/Videography/VideographyHero.jpg';
import Placeholder from '/Placeholders/Placeholder.png';
import { Link } from 'react-router-dom';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';

function Photography(){
    return(

        <section className="projectHero">

        <div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Photography</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Collection]</h3>
        <h3 className='projectIntroCentre'>[2020 - 2025]</h3>
        <h3 className='projectIntroRight'>[Images]</h3>
        </div>
    </div>
</div>


<div className='imagesTrio'>
    <img src={Placeholder} alt="UNPortfolio" className='UNPortfolio'></img>
    <img src={Placeholder} alt="UNPoster" className='UNPoster'></img>
    <img src={Placeholder} alt="UNDisplay" className='UNDisplay'></img>
    </div>



    <div className='projectImageClick'>
        <Link to="/Videography">
            <div className="imageOverlayContainer">
            <img src={VideographyHero} alt="VideographyHero" className="projectImage"/>
            <div className="overlayText">Video Production</div>
            </div>
        </Link>
    </div>


        </section>

    );
}

export default Photography;