import React, {Component} from 'react';
import api from '../utils/methods';

class Stars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <span className="star-rating">
          <input type="radio" name="rating" value="5" onClick={api.submitRating} /><i></i>
        </span>
      </div>
    )
  }
}

export default Stars;
