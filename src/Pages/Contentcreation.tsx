import './CSS/Videography.css';
import { Link } from 'react-router-dom';
import PhotographyHero from '/Images/Photography/PhotographyHero.jpg';
import placeholder3 from'/Placeholders/project3placeholder.jpeg';
import './CSS/Projectone.css';
import './CSS/Photography.css';
import './CSS/Home.css';
import './CSS/ContentCreation.css';


function Videography(){
    return(
        <section className="projecthero">

            <div className='titleParallax'>
                <div className='titleOverlay'>
                    <h1>Content Creation</h1>

                    <div className='projectIntro'>
                        <h3 className='projectIntroLeft'>[Videography]</h3>
                        <h3 className='projectIntroCentre'>[2023 - 2026]</h3>
                        <h3 className='projectIntroRight'>[Client - MTU]</h3>
                    </div>


                        

                <div className='contentVideos'>
                    <div className='ccvid'>
                        <iframe width="337" height="599" src="https://www.youtube.com/embed/_U2d_8n0Nlo" title="StudentMTU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    
                    <div className='ccvid'>
                        <iframe width="337" height="599" src="https://www.youtube.com/embed/ofCKqdgmMZ0" title="DepopMTU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className='ccvid'>
                        <iframe width="337" height="599" src="https://www.youtube.com/embed/3WSWEyMppbk" title="InterviewMTU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
</div>

            
                </div>
            </div>

            <div className="project-nav">
                <Link to="/Photography">
                    <div className="nav-item left">
                        <span className="nav-label">← Previous project</span>
                        <img src={placeholder3} alt="Previous Project" className="nav-image" />
                    </div>
                </Link>

                <Link to="/Projectone">
                    <div className="nav-item right">
                        <span className="nav-label">Next project →</span>
                        <img src={PhotographyHero} alt="Next Project" className="nav-image" />
                    </div>
                </Link>
            </div>

        </section>
    );
}

export default Videography;
