// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch images from localStorage when the component is mounted
//   useEffect(() => {
//     const storedImages = JSON.parse(localStorage.getItem('images')) || [];
//     setImages(storedImages);
//   }, []);

//   // Open modal and set the clicked image
//   const openModal = (index) => {
//     setCurrentImageIndex(index);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Show next image in the modal
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Show previous image in the modal
//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Gallery</title>
//         <meta name="description" content="Image Gallery" />
//       </Helmet>

//       {/* Breadcrumb */}
//       <div className="site-breadcrumb" style={{ background: 'url(/img/breadcrumb/01.jpg)' }}>
//         <div className="container">
//           <h2 className="breadcrumb-title">Gallery</h2>
//           <ul className="breadcrumb-menu">
//             <li><a href="/">Home</a></li>
//             <li className="active">Gallery</li>
//           </ul>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="gallery-container">
//         <div className="gallery-grid">
//           {images.length === 0 ? (
//             <p>No images found in the gallery</p>
//           ) : (
//             images.map((image, index) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.alt}
//                 className="gallery-image-item borderr"
//                 onClick={() => openModal(index)} // Open the modal on click
//               />
//             ))
//           )}
//         </div>

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="modal-overlay">
//             <button className="modal-close-button" onClick={closeModal}>
//               &times;
//             </button>
//             <div className="modal-content-container">
//               <button className="modal-prev-button" onClick={prevImage}>
//                 &#10094;
//               </button>
//               <div className="modal-image-container">
//                 <img
//                   src={images[currentImageIndex].src}
//                   alt={images[currentImageIndex].alt}
//                   className="modal-image"
//                 />
//               </div>
//               <button className="modal-next-button" onClick={nextImage}>
//                 &#10095;
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Gallery;












import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Gallery = () => {
  // Sample images with unique ids and different src/alt values
  const images = [
    { id: 1, src: '/images/ourfleet/1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/ourfleet/2.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/ourfleet/3.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/ourfleet/4.jpg', alt: 'Image 4' },
    { id: 5, src: '/images/ourfleet/5.jpg', alt: 'Image 5' },
    { id: 6, src: '/images/ourfleet/6.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/7.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/8.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/9.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/10.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/11.jpg', alt: 'Image 6' },
    { id: 6, src: '/images/ourfleet/12.jpg', alt: 'Image 6' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal and set the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show next image in the modal
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Show previous image in the modal
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

<>


<div
      className="site-breadcrumb"
      style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title">Gallery  </h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Gallery</li>
        </ul>
      </div>
    </div>

    
    <div className="gallery-container ">
      <div className="gallery-grid ">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image-item borderr"
            onClick={() => openModal(index)} // Open the modal on click
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <button className="modal-close-button" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content-container">
            <button className="modal-prev-button" onClick={prevImage}>
              &#10094;
            </button>
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="modal-image"
              />
            </div>
            <button className="modal-next-button" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>

</>
  );
};

export default Gallery;