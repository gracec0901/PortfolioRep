import './CSS/Contact.css';
import ContactForm from '../Components/ContactForm';



function Contact() {

    return (
    <section className='contact'>
    <div className='container'>
            <div className='contactHeading'>
            <h1>LETS CHAT!</h1>
            </div>
        <div className='contactSocials'>
            <div className='socials'>
            <ul>
                <li><h3><a href="mailto:graceclehanemedia@gmail.com">[graceclehanemedia@gmail.com]</a></h3></li>
                <li><h3><a href="https://www.linkedin.com/in/grace-clehane-85a66922b/">[LinkedIn]</a></h3></li>
                <li><h3><a href="https://www.instagram.com/graceclehanemedia/">[Instagram]</a></h3></li>
            </ul>
            </div>
        </div>

        <div className='contactFormWrapper'>
          <ContactForm />
        </div>


    </div>
    </section>
    );
}

export default Contact;

