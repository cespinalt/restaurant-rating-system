import React, {Component} from 'react';
import Header from './Header.jsx';
import RestaurantList from './RestaurantList.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h1 className="text-center">Rate Restaurants all over the world!</h1>
            <RestaurantList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
