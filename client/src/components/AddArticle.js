import React, { Component } from 'react';  
import axios from 'axios';

class AddArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
 

    getNewArticle(e){
        e.preventDefault();
        axios.post(`/api/v1/articles`, {
            title: this.state.title,
            body: this.state.body
        })
        .then(response => {
           console.log(response); 
           alert("Submitted");
        })
        .catch(error => {
            alert("Fill all values")
            console.log(error)
        });
         this.setState({
            title: '',
            body: ''
         });
    }
  
  render() {

    return ( 
        <div className="row">
           <h4 className="center-align">Add New Article</h4>
            <form className="col s12" id="New_Article_Form"onSubmit={this.getNewArticle.bind(this)}>
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

export default AddArticle;