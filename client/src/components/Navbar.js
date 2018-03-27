import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  
  render() {

    return (
      <div> 
            <nav className="nav-extended teal lighten-2">
                <div className="nav-wrapper">
                <a className="brand-logo center">Articles</a>
                <a data-activates="main-menu" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-small-only">
                    <li><Link to="/" ><i className="material-icons left">folder_special</i>Articles</Link></li> 
                </ul>
                <ul className="side-nav" id="main-menu">
                    <li><Link to="/" ><i className="material-icons">folder_special</i>Articles</Link></li> 
                </ul>
                </div> 
            </nav>
      </div>
    );
  }
}

export default Navbar;