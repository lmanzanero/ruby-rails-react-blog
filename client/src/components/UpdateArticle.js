import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 

class UpdateArticles extends Component {
  constructor(props){
    super(props);
    this.state = {
        match: props.match.params.id,
        title: '',
        body: ''
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

  updateArticle(e){
    // Make a request for a user with a given ID
    axios.put(`/api/v1/articles/${this.state.match}`, {
        title: this.state.title,
        body: this.state.body
     })
      .then(response => { 
        console.log(response)
      })
      .catch(error => console.log(error));
  } 

  render() {

    return (
        <div className="row">
            <h4 className="center-align">Add New Article</h4>
            <form className="col s12" id="New_Article_Form" onSubmit={this.updateArticle.bind(this)}>
            <div className="row">
            <div className="input-field col s6">
                <input id="Title" type="text" value={this.state.title} onChange={(e) => this.setState({title:e.target.value})} className="validate" required="" aria-required="true"/>
                <label htmlFor="title">Title</label>
            </div>
                <div className="input-field col s12">
                <textarea id="Article Body" className="materialize-textarea" value={this.state.body}  onChange={(e) => this.setState({body:e.target.value})} required="" aria-required="true" ></textarea>
                <label hmtlfor="Article Body" >Article Body</label>
                </div>
            </div>
            <input className="btn" type="submit" value="Submit" />
            </form> 
        </div> 
    );
  }
}

export default UpdateArticles;
