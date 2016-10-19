import React, {Component} from 'react';
import Header from './Header.jsx';
import RestaurantList from './RestaurantList.jsx';
import api from '../utils/methods';
class App extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    const self = this;
    api.getRestaurants()
    .then(result => {
      self.setState({restaurants: result.data.restaurants});
    })
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h1 className="text-center">Rate Restaurants all over the world!</h1>
            <RestaurantList restaurants={this.state.restaurants} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
