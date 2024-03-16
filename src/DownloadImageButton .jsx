import React, { useRef } from 'react';

const DownloadImageButton = ({ imageUrl, styles }) => {
  const imageRef = useRef(null);

  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = imageRef.current;

    const imgElement = new Image();
    imgElement.crossOrigin = 'anonymous'; // Handle CORS for external images
    imgElement.src = imageUrl;
    imgElement.onload = () => {
      canvas.width = imgElement.width;
      canvas.height = imgElement.height;

      // Apply styles/filters to the canvas context
      Object.keys(styles).forEach(key => {
        context[key] = styles[key];
      });

      context.drawImage(imgElement, 0, 0);

      // Create a temporary link element to download the image
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  };

  return (
    <div>
      <img ref={imageRef} src={imageUrl} alt="Download" style={{ display: 'none' }} />
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
};

export default DownloadImageButton;
