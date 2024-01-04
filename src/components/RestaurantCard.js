import React from 'react'
import "../styles/RestaurantCard.css";
import {IMG_CDN_URL} from "./Constant";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
  return (
    <div className='cards-container'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food" className='card-image' />
      <div className='card-content'>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p className='card-category'>{cuisines?.join(', ')}</p>
          <p className='card-rating'>{lastMileTravelString} minutes</p>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;