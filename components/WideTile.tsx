import React from 'react';
import '../css/WideTile.css'; // Import the CSS file for styling

const WideTile1 = ({ image, title, description, link }) => {
  return (
    <div className="wide-tile">
      <img src={image} alt={title} className="wide-tile-image" />
      <div className="wide-tile-content">
        <h2 className="wide-tile-title">{title}</h2>
        <p className="wide-tile-description">{description}</p>
        {link && (
          <a href={link} className="wide-tile-link">
            Learn more
          </a>
        )}
      </div>
    </div>
  );
};

export default WideTile1;
