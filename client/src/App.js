import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
 


const App = () => (
      <div className="App"> 
          <Navbar/>
          <div className="container-fluid">
          <Routes/>
          </div>
          <div className="fixed-action-btn">
            <Link to="/articles/add" className="btn-floating btn-large-red">
            <i className="material-icons">add</i>
            </Link>
          </div>
      </div>
    );
   

export default App;
