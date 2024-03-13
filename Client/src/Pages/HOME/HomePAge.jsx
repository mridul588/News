import React from 'react';
import NewsCard from '../../Components/NewsCard1';
import './style.css'; // Import your custom CSS file

const Homepage = () => {
  return (
    <div className="homepage-container"> {/* Add a new container class */}
      <NewsCard /> 
    </div>
  );
};

export default Homepage;
