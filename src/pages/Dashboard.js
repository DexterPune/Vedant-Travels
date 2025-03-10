// import React, { useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [imageToUpload, setImageToUpload] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')) || []);

//   // Handle image file selection
//   const handleFileChange = (e) => {
//     setImageToUpload(e.target.files[0]);
//   };

//   // Handle image upload
//   const handleImageUpload = async () => {
//     if (!imageToUpload) {
//       alert('Please select an image to upload.');
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('image', imageToUpload);

//     try {
//       const token = localStorage.getItem('authToken'); // Get token from localStorage
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Authorization': token, // Send token as Authorization header
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Save the uploaded image URL to localStorage for Gallery to fetch
//       const newImage = {
//         id: Date.now(),
//         src: response.data.imageUrl,
//         alt: 'New Image',
//       };

//       // Update images in localStorage
//       const updatedImages = [...images, newImage];
//       localStorage.setItem('images', JSON.stringify(updatedImages));
//       setImages(updatedImages); // Update state

//       alert('Image uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Error uploading image');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle image delete
//   const handleImageDelete = async (imageId, imageUrl) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this image?');
//     if (!confirmDelete) return;

//     setLoading(true);

//     try {
//       const token = localStorage.getItem('authToken'); // Get token from localStorage
//       await axios.delete(`http://localhost:5000/delete/${imageUrl}`, {
//         headers: {
//           'Authorization': token, // Send token as Authorization header
//         },
//       });

//       // Remove the deleted image from localStorage
//       const updatedImages = images.filter((image) => image.id !== imageId);
//       localStorage.setItem('images', JSON.stringify(updatedImages));
//       setImages(updatedImages); // Update state

//       alert('Image deleted successfully');
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       alert('Error deleting image');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>

//       {/* Image Upload Section */}
//       <div>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={handleImageUpload} disabled={loading}>
//           {loading ? 'Uploading...' : 'Upload Image'}
//         </button>
//       </div>

//       {/* Gallery Section */}
//       <h3>Image Gallery</h3>
//       <div className="gallery">
//         {images.length === 0 ? (
//           <p>No images to display</p>
//         ) : (
//           images.map((image) => (
//             <div key={image.id} className="gallery-item">
//               <img src={image.src} alt={image.alt} className="gallery-image" />
//               <button
//                 onClick={() => handleImageDelete(image.id, image.src)}
//                 disabled={loading}
//               >
//                 {loading ? 'Deleting...' : 'Delete'}
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [imageToUpload, setImageToUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')) || []);

  // Handle image file selection
  const handleFileChange = (e) => {
    setImageToUpload(e.target.files[0]);
  };

  // Handle image upload
  const handleImageUpload = async () => {
    if (!imageToUpload) {
      alert('Please select an image to upload.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', imageToUpload);

    try {
      const token = localStorage.getItem('authToken'); // Get token from localStorage
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Authorization': token, // Send token as Authorization header
          'Content-Type': 'multipart/form-data',
        },
      });

      // Save the uploaded image URL to localStorage
      const newImage = {
        id: Date.now(),
        src: response.data.imageUrl,
        alt: 'New Image',
      };

      // Update images state
      const updatedImages = [...images, newImage];
      setImages(updatedImages);
      localStorage.setItem('images', JSON.stringify(updatedImages));

      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setLoading(false);
    }
  };

  // Handle image delete
  const handleImageDelete = async (image) => {
    const imageName = image.src.split('/').pop(); // Extract image name from the URL
    const token = localStorage.getItem('authToken');

    try {
      console.log(`Attempting to delete image: ${imageName}`);

      // Send DELETE request to the backend
      const response = await axios.delete(`http://localhost:5000/delete/${imageName}`, {
        headers: {
          'Authorization': token, // Send token as Authorization header
        },
      });

      console.log('Response from server:', response);

      if (response.status === 200) {
        // If deletion is successful, update the frontend state and localStorage
        const updatedImages = images.filter((img) => img.id !== image.id);
        setImages(updatedImages);
        localStorage.setItem('images', JSON.stringify(updatedImages));

        alert('Image deleted successfully');
      } else {
        alert('Failed to delete image.');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleImageUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>

      <h3>Uploaded Images</h3>
      <div className="image-list">
        {images.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.src} alt={image.alt} width={100} />
              <button onClick={() => handleImageDelete(image)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
