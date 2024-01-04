import React, { useState } from "react";
import "../styles/Body.css";
import { restrautList } from "./Constant";
import Card from "./RestaurantCard";


function filterData (searchText, restaurant){
  const filterData = restaurant.filter((restaurant) =>
  restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurant, setRestaurant] = useState(restrautList);

  return (
    <>
      <div className="search-box">
        <input
          type="text" 
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          className="search-button"
          onClick={() => {
           const data = filterData(searchText, restaurant);
           setRestaurant(data);
          }}
        >
          Search
        </button>
        {/* <h1 className="search-results">{searchText}</h1> */}
      </div>
      {restaurant.map((restaurant) => (
        <Card
          key={restaurant.data.id}
          name={restaurant.data.name}
          cuisines={restaurant.data.cuisines}
          cloudinaryImageId={restaurant.data.cloudinaryImageId}
          lastMileTravelString={restaurant.data.lastMileTravelString}
        />
      ))}
    </>
  );
};

export default Body;
