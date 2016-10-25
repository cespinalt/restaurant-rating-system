import React, {Component} from 'react';
import api from '../utils/methods';

class Stars extends Component {
  constructor(props) {
    super(props);
  }

  onClickHandler(e) {
    e.preventDefault();
    const username = window.prompt('type your username')
    const restID = this.props.id;
    const value = e.target.value;
    this.props.submitRating(username, restID, value);
  }
  render() {
    return(
      <div>
        <span className="star-rating">
          <input type="radio" name="rating" value="1"
            onClick={this.onClickHandler.bind(this)} /><i></i>
          <input type="radio" name="rating" value="2"
            onClick={this.onClickHandler.bind(this)} /><i></i>
          <input type="radio" name="rating" value="3"
            onClick={this.onClickHandler.bind(this)} /><i></i>
          <input type="radio" name="rating" value="4"
            onClick={this.onClickHandler.bind(this)} /><i></i>
          <input type="radio" name="rating" value="5"
            onClick={this.onClickHandler.bind(this)} /><i></i>
        </span>
      </div>
    )
  }
}

export default Stars;
