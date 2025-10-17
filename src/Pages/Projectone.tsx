import './CSS/Projectone.css';
import Placeholder from '/Placeholders/Placeholder.png';
import UNPhones2 from '/Images/Project One/UNPhones2.png';
import { Link } from 'react-router-dom';


function Projectone() {
return(
<section className="projecthero">
<h1>URBAN NOTES</h1>

<div className='projectIntro'>
<h3 className='projectIntroLeft'>[Munster Technological University]</h3>
<h3 className='projectIntroCentre'>[2024]</h3>
<h3 className='projectIntroRight'>[Final Year Project]</h3>
</div>

<div className='projectDescription'>
    <p>For my Final Year Project, I independently designed an application aimed towards local citizens and tourists, allowing them to explore and interact with the street art of Cork independently and learn the stories behind the art and the artists. Growing up, I have always admired the street art of Cork and I wanted to have an engaging and interesting way to interact and to give back to the talented artists that give us these powerful works of art, beautifying our city. I wanted to create a product that allowed the user to easily access this information in an interactive and engaging way while also being able to open up a discussion about the art with the rest of the community.</p>
    <div className='furtherText'>
        <p>Urban Notes works off of AR technology to function the personalised notes, by using Lens Studio, an AR filter was built to mimic how a mural artist would spray paint the wall and from here developed the idea that the user would use their hand to draw their chosen note and this would then be put on the art piece.</p>
        <p>The aim behind this project is to bridge the disconnect we have with art that is telling our stories. Urban Notes aims to open up an engagement between the public realm and the community.</p>
        <p>Urban Notes is based in Cork City, but this application has the capabilities to be expanded beyond Cork City and be used in cities all across Ireland and even Europe. Urban Notes is a tool for exploration and engagement which is a function that can be expanded on to include more domains.
        </p>
    </div>
    <img src={UNPhones2} alt="UNPhones" className="UNPhones2"></img>
</div>

<h1 className='slogan'>"Explore, Engage, Create"</h1>

<div className='projectFurther'>
    <p className='furtherText1'>Urban Notes is a community-based application where the user benefits from the immersive design of interacting with the artworks, gaining a knowledge into the cultural significance and stories of the art and the artists gain exposure from the art, through the AR stories showing their name and links to appropriate websites such as portfolios or web shops.</p>
    <p className='furtherText2'>The key technical aspects of this application is the AR functionality. I wanted to add this functionality as AR is a growing technology and through testing other apps utilising AR I wanted to implement this into the application to maximise engagement and interest. The AR can be seen through the premade AR stories, bringing the art to life telling its story and its message. This function is useful to provide context and history behind the piece to both the local citizens and visitors to the city. Then the virtual notes using Lens Studio and Unity adds a level of interactivity and immersion, inviting users to leave their own interpretation and message on the art in a non damaging way as it's completely digital.</p><img src={Placeholder} alt="placeholder1" className="placeholder2"></img>
</div>

<img src={Placeholder} alt="placeholder" className="placeholder3"></img>

<div className='section3'>
    <h1 className='slogan'>Prize for Innovation</h1>
    <div className='projectFurther'>
        <img src={Placeholder} alt="placeholder" className="placeholder4"></img>
        <p>Urban Notes was honoured to be shortlisted for the MTU Prize for Innovation in 2024. The experience was incredibly rewarding, as it provided the opportunity to pitch the project to potential investors and connect with fellow young entrepreneurs, gaining insights into their inspiring ideas.
It was pitched to possible investors and the prize judges in which valuable advice and insights were gained into how the project can be made more valuable to customers. With the support from customers such as Fáilte Ireland and the Arts Council, it can be used as a tool for general cultural exploration and engagement, for example it can be used for music or tourist attractions.</p>
    </div>
</div>

<Link to='/Projecttwo' ><h2 className='nextprojectBtn'>Next Project</h2></Link>

</section>
);
}

export default Projectone;

