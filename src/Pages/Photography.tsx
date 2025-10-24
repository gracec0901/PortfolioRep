import VideographyHero from '/Images/VideographyHero.jpg';
import { Link } from 'react-router-dom';
import './CSS/Projectone.css';
import './CSS/Home.css';

function Photography(){
    return(

        <section className="projectHero">

        <div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Photography</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Munster Technological University]</h3>
        <h3 className='projectIntroCentre'>[2024]</h3>
        <h3 className='projectIntroRight'>[Final Year Project]</h3>
        </div>
    </div>
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