import React from 'react';
import Stars from './Stars.jsx';

const Restaurant = props => {
  return(
    <div className="col-md-4">
      {console.log(props.restaurant)}
      <div className="well">
        <h4 className="text-center">{props.restaurant.name}</h4>
        <img className="thumbnail img-responsive"
            src={`../assets/images/${props.restaurant.thumbnail}`} />
        <h3 className="choice">Choose a rating</h3>
        <Stars {...props.restaurant} />
      </div>
    </div>
  )
};

export default Restaurant;
