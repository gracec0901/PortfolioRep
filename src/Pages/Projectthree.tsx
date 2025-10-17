import './CSS/Projectthree.css';
import Placeholder from '/Placeholders/Placeholder.png';
import { Link } from 'react-router-dom';

function Projectthree() {
return(
<section className="projecthero">
<h1>Interaction and Experience Design</h1>

<div className='projectIntro'>
<h3 className='projectIntroLeft'>[University of Limerick]</h3>
<h3 className='projectIntroCentre'>[2025]</h3>
<h3 className='projectIntroRight'>[Masters]</h3>
</div>

<div className='projectDescription'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, asperiores quam veniam distinctio dolorum quidem officia temporibus maxime provident aliquid ut cupiditate libero impedit aut, in odit, illum quaerat nisi?</p>
    <div className='furtherText'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam illum optio repellendus ipsum inventore atque placeat, rem dolore labore, voluptatibus nesciunt officiis! Illo totam eaque provident illum. Quibusdam, atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam illum optio repellendus ipsum inventore atque placeat, rem dolore labore, voluptatibus nesciunt officiis! Illo totam eaque provident illum. Quibusdam, atque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam illum optio repellendus ipsum inventore atque placeat, rem dolore labore, voluptatibus nesciunt officiis! Illo totam eaque provident illum. Quibusdam, atque?</p>
    </div><img src={Placeholder} alt="placeholder" className="p3placeholder1"></img>
    
</div>

<h1 className='slogan'>"Quote"</h1>

<div className='projectFurther'>
    <p className='furtherText1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam illum optio repellendus ipsum inventore atque placeat, rem dolore labore, voluptatibus nesciunt officiis! Illo totam eaque provident illum. Quibusdam, atque?</p>
    <p className='furtherText2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam illum optio repellendus ipsum inventore atque placeat, rem dolore labore, voluptatibus nesciunt officiis! Illo totam eaque provident illum. Quibusdam, atque?</p><img src={Placeholder} alt="placeholder1" className="placeholder2"></img>
</div>

<img src={Placeholder} alt="placeholder" className="p3placeholder3"></img>


<Link to='/Project' ><h2 className='nextprojectBtn'>Back to Work</h2></Link>

</section>
);
}

export default Projectthree;