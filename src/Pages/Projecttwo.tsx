import './CSS/Projecttwo.css';
import Placeholder from '/Placeholders/Placeholder.png';
import { Link } from 'react-router-dom';

function Projecttwo() {
return(
<section className="projecthero">
<h1>Immersive Design</h1>

<div className='projectIntro'>
<h3 className='projectIntroLeft'>[Hogeschool Utrecht]</h3>
<h3 className='projectIntroCentre'>[2022]</h3>
<h3 className='projectIntroRight'>[Erasmus]</h3>
</div>

<div className='projectDescription'>
    <p>I was very lucky to be offered an Erasmus position, specialising in 'Immersive Design' at hogechool Utrecht. There I learned very valuable skills such as storytelling, creating engaging and interactive experiences and teamwork.</p>
    <div className='section3'>
        <h1 className='slogan'>Beeld En Geluid</h1>
        <h3>Client</h3>
        <div className='projectFurther'>
        <img src={Placeholder} alt="placeholder" className="placeholder4"></img>
        <p>We collaborated with the client, Beeld en Geluid, to design an immersive experience tailored for younger visitors at their newly renovated museum. Our team developed an engaging storyline where users assisted a group of characters in solving challenges throughout the museum, creating an interactive and educational experience.</p>
        </div>
    </div>
</div>

<h1 className='slogan'>Elapsed Frequencies</h1>
<div className='furtherText'>
    
        <p>For the final project, we were tasked to build an immersive experience with peers that were interested in the same technology and subjects, so I teamed with three others to build 'Elapsed Frequencies', an immersive experience guiding the user through the development and growth of music.</p>
        <p>Through audio and visual technology we built an environment where through storytelling we could guide the audience through this experience. I was tasked to create the visuals which were projected on four walls.</p>
        <p>I built this using Adobe Premiere Pro and After Effects.</p>
    </div>
    <img src={Placeholder} alt="placeholder" className="p2placeholder1"></img> 



<Link to='/Projectthree' ><h2 className='nextprojectBtn'>Next Project</h2></Link>

</section>
);
}

export default Projecttwo;