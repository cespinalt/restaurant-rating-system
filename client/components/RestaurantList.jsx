import React from 'react';
import Restaurant from './Restaurant.jsx';

const RestaurantList = props => {
  return(
    <div>
      {props.restaurants.map((restaurant, i) => {
        return <Restaurant restaurant={restaurant} key={i}
          submitRating={props.submitRating}/>
      })}
    </div>
  )
}

export default RestaurantList;
