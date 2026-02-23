import { useState } from "react";
import '../Pages/CSS/Photography.css';
import Storyboard1 from '/Images/InteractiveMedia/Storyboard1.jpg';
import Storyboard2 from '/Images/InteractiveMedia/Storyboard2.jpg';
import Storyboard3 from '/Images/InteractiveMedia/Storyboard3.jpg';

const images = [
  { src: Storyboard1, alt: "Page 1" },
  { src: Storyboard2, alt: "Page 2" },
  { src: Storyboard3, alt: "Page 3" }
];

export default function ImageGallery() {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="contentsection">
      
      <div className="row">
        {images.map((img) => (
          <div className="column" key={img.src}>
            <div className="thumb-wrapper">
              <img src={img.src} alt={img.alt} onClick={() => setActive(img)} />
              <div className="thumb-overlay">{img.alt}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Image */}
      <div className="container expanded">
        <img id="expandedImg" src={active.src} alt={active.alt} />
        <div id="imgtext">{active.alt}</div>
      </div>

    </div>
  );
}