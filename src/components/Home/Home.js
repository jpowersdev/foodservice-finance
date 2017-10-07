import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import Register from '../Register/Register'
import Navigation from '../Navigation/Navigation'

const styles = {
  container: {
    width: '15vw',
    backgroundColor: '#E0E0E0',
    height: '88vh',
    position: 'fixed',
    overflowY: 'scroll'
  },
  nav: {

  },
  list: {
    listStyleType: 'none'
  },
  active: {
    color: '#008cff',
    background: '0 0',
  },
  link: {
    textDecoration: 'none'
  },
  home: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    overflow: 'hidden'
  },
  bottom: {
    height: '10vh',
    margin: '0 auto',
    position: 'absolute',
    left: '15vw',
    right: '42px',
    bottom: '8px',
    top: '80vh',
    width: '80vw',
    textAlign: 'center',
    paddingLeft: '2vw',
    paddingRight: '2vw'
  },
  button: {
    display: 'block',
    margin: '0 auto',
    position: 'relative'
  }
}

class Sidebar extends React.Component {

  render () {
    return (
      <div id="sidebar" style={styles.container}>
        <nav role="navigation" style={{}}>
          <ul style={styles.list}>
            <li style={styles.link, styles.active}>One</li>
            <li style={styles.link}>Two</li>
          </ul>
        </nav>
      </div>
    )
  }
}

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

// Today
// This Week
// Just the Weekdays
// Just the Weekends
// This Month
// Last Three Months
// This Year
// All Time
class BottomNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.select = this.select.bind(this);
  }

  select (index) {
    this.setState({selectedIndex: index});
  }

  render () {
    return (
      <BottomNavigation style={styles.bottom} selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem style={styles.button}
          label="Recents"
          icon={recentsIcon}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem style={styles.button}
          label="Favorites"
          icon={favoritesIcon}
          onClick={() => this.select(1)}
        />
        <BottomNavigationItem style={styles.button}
          label="Nearby"
          icon={nearbyIcon}
          onClick={() => this.select(2)}
        />
      </BottomNavigation>
    )
  }
}

class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="home" style={styles.home}>
        <Sidebar />
        <Register />
        <BottomNav />
      </div>
    )
  }
}

export default Home
