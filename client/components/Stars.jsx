import React from 'react';

const Stars = ()=> {
  return(
    <div>
      <span className="star-rating">
        <input type="radio" name="rating" value="1" /><i></i>
        <input type="radio" name="rating" value="2" /><i></i>
        <input type="radio" name="rating" value="3" /><i></i>
        <input type="radio" name="rating" value="4" /><i></i>
        <input type="radio" name="rating" value="5" /><i></i>
      </span>
    </div>
  )
};

export default Stars;
