import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      match: props.match.params.id,
      title: '',
      body:''
    }  
  }

  componentWillMount(){ 
    this.getArticle();
  } 

  getArticle(){
    // Make a request for a user with a given ID
    axios.get(`/api/v1/articles/${this.state.match}`)
      .then(response => {
        this.setState({title: response.data.data.title, body: response.data.data.body}) 
        console.log(response.data.data)
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container"> 
         <h4>{this.state.title}</h4>
         <p>{this.state.body}</p>
         <Link to={`update/${this.state.match}`} className="waves-effect waves-light btn">Update</Link>
         <Link to="/" className="waves-effect red accent-2 waves-light btn">Delete</Link>
      </div>
    );
  }
}

export default App;
