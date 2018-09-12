//import React, { Component } from 'react';


//cuando solo se encarga de renderizar se pude volver un
// Stateless Functional Component

import React from 'react';

const NavBar = (props) => {

  return (
    <nav className = "navbar navbar-light bg-light">
    <a className = "navbar-brand" href="#">Navbar
    <span> {props.totalCounters}</span>
    </a>

    </nav>
  );


};



/*
class NavBar extends Component {

  render() {
    return (
      <nav className = "navbar navbar-light bg-light">
        <a className = "navbar-brand" href="#">Navbar
          <span> {this.props.totalCounters}</span>
        </a>

      </nav>
    );
  }

}
*/

export default NavBar;
