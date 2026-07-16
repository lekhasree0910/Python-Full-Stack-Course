import { useState } from "react";

function ImageSwitcher() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="card">
      <h2>Event Task 5: Image Switcher</h2>
      <div className="image-switcher">
        <button className="btn" onClick={prevImage}>Previous</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="btn" onClick={nextImage}>Next</button>
      </div>
      <p className="image-counter">Image {currentIndex + 1} of {images.length}</p>
    </div>
  );
}

export default ImageSwitcher;
