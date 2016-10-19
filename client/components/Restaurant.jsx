import React from 'react';
import Stars from './Stars.jsx';

const Restaurant = props => {
  return(
    <div className="col-md-4">
      <div className="well">
        <img className="thumbnail img-responsive"
          src="../assets/images/1.jpg" />
        <h3 className="choice">Choose a rating</h3>
        <Stars />
      </div>
    </div>
  )
};

export default Restaurant;
