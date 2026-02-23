import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder1 from'/Placeholders/project1placeholder.png';
//import IMVideo from '/Images/Videography/IMVideo.mp4'; 
import ImageGalleryIM from '../Components/ImageGalleryIM';
import GroupImage from '/Images/Videography/GroupImage.jpg';

import Drawing1 from '/Images/InteractiveMedia/Drawing1.jpg';
import Drawing2 from '/Images/InteractiveMedia/Drawing2.jpg';
import Drawing3 from '/Images/InteractiveMedia/Drawing3.jpg';
import FlowDiagram from '/Images/InteractiveMedia/FlowDiagram.jpg';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';


function InteractiveMedia(){
    return(
        <section className="projecthero">

            <div className='titleParallax'>
                <div className='titleOverlay'>
                    <h1>Interactive Media</h1>

                    <div className='projectIntro'>
                        <h3 className='projectIntroLeft'>[Interactive Media Module]</h3>
                        <h3 className='projectIntroCentre'>[2026]</h3>
                        <h3 className='projectIntroRight'>[Assignment 1]</h3>
                    </div>

                        

                   <div className='projectDescription'>
                    <div className='firstText'>
                        <h2>UN Sustainable Development Goal 12</h2>
                    
                    </div>


                    <ImageGalleryIM />

</div>

                     
                    <div className='videoText'>
                        
                        <img src={FlowDiagram} alt="BTSImage" className='VideoImage'></img>
                        

                        
                        <div className="scroll-container">
                        <img src={Drawing1} alt="DirectingImage" className='VideoImage'></img>
                        <img src={Drawing2} alt="ShootingImage" className='VideoImage'></img>
                        <img src={Drawing3} alt="Brainstorm" className='VideoImage'></img>
                        </div>
                      
                        

                        <img src={GroupImage} alt="GroupImage" className='VideoImage'></img>

                    </div>
                </div>
            </div>

            <div className="project-nav">
                <Link to="/Photography">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={PhotographyHero} alt="Previous Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Projectone">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={placeholder1} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default InteractiveMedia;
