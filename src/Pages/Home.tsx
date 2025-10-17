import './CSS/Home.css';
import placeholder1 from'/Placeholders/project1placeholder.png';
import placeholder2 from'/Placeholders/project2placeholder.png';
import placeholder3 from'/Placeholders/project3placeholder.jpeg';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <main className="container">
      <section id="hero" className='hero'>
       <h1 className="h1hero"> <span className="highlightText">Hi, I'M GRACE.</span></h1>
        <p className="phero">A Cork based digital designer, passionate in creating <br />
        creative, impactful and immersive experiences.</p>
      </section>

    <div className='abouthomewrapper'>
      <section id="abouthome" className='abouthome'>
        <div className="aboutgrid">
          
            <div className="aboutlink">
            <Link to="/About">About</Link>
            </div>
            <div className="abouttext">
            <p>I’m a passionate digital designer based in Cork City, Ireland. With an Honours Degree in Creative Digital Media, I’ve developed a versatile skillset that allows me to craft visually compelling and user-friendly experiences.Proficient in the Adobe Creative Cloud, web design, branding, graphic design, and videography.</p>
          </div>
           <div className="aboutBtn">
            <Link to="/About"><h2>+</h2></Link>
          </div>
        </div>
      </section>
      </div>


  <section className="projects">
        
    <h1>Work</h1>

    <div className="row">
      <div className="column">
        <div className="projectcard">
          <Link to="/Projectone"><img src={placeholder1} alt="placeholder1" className="project1image"></img></Link>
          <div className="container">
          <h2 className="projectTitle">URBAN NOTES</h2>
          <Link to="/Projectone" className="projectButton">+</Link>
          </div>
        </div>
      </div>
  
      <div className="column">
        <div className="projectcard">
          <Link to="/Projecttwo"><img src={placeholder2} alt="placeholder2" className="project2image"></img></Link>
          <div className="container">
          <h2 className="projectTitle">IMMERSIVE DESIGN</h2>
          <Link to="/Projecttwo" className="projectButton">+</Link>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="projectcard">
          <Link to="/Projectthree"><img src={placeholder3} alt="placeholder3" className="project3image"></img></Link>
          <div className="container">
          <h2 className="projectTitle">INTERACTION & EXPERIENCE DESIGN</h2>
          <Link to="/Projectthree" className="projectButton">+</Link>
          </div>
       </div>
      </div>
    </div>
  </section>

      
    </main>
  );
}

export default Home;
