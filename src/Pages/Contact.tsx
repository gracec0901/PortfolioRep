import './CSS/Contact.css';

function Contact() {

    return (
    <section className='contact'>
        <div className='contactHeading'>
        <h1>Get in Touch!</h1>
        <h3><a className='email' href="mailto:graceclehanemedia@gmail.com">graceclehanemedia@gmail.com</a></h3>
        </div>
    <div className='contactSocials'>
        <p>Please don't hesitate to contact me with any queries!</p>
        <div className='socials'>
        <p><a href="https://www.linkedin.com/in/grace-clehane-85a66922b/">LinkedIn</a></p>
        <p><a href="https://www.instagram.com/graceclehanemedia/">Instagram</a></p>
        </div>
    </div>
    </section>
    );
}

export default Contact;
