import './CSS/Videography.css';

function Videography(){
    return(

        <section className="projectHero">

        <div className='titleParallax'>
    <div className='titleOverlay'>
    <h1>Videography</h1>
        <div className='projectIntro'>
        <h3 className='projectIntroLeft'>[Collection]</h3>
        <h3 className='projectIntroCentre'>[2020 - 2025]</h3>
        <h3 className='projectIntroRight'>[Videos]</h3>

        <div className="Video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OaO_EhgVy9M?si=ilgtwkMLkQ-KnjTz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        </div>
    </div>
</div>

</section>
    );
}

export default Videography;