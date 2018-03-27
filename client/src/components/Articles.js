import React, { Component } from 'react'; 
import axios from 'axios'; 

class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    } 
  }

  componentWillMount(){
    this.getArticles();
  } 

  getArticles(){
    // Make a request for a user with a given ID
    axios.get(`/api/v1/articles`)
      .then(response => {
        this.setState({articles: response.data.data}) 
        console.log(this.state.articles)
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div className="row"> 
            <div>
            <h1 className="center-align"> Articles</h1>
            { this.state.articles.map(article => (
            <div key={article.id} className="card hoverable center-align col s12 m6 l4">
            <div className="card-image">
              <img alt={`${article.title}`} src="http://www.nationsonline.org/gallery/Belize/Belize-Blue-Hole.jpg"/>
              <span className="card-title">{article.title}</span>
            </div>
            <div className="card-content">
              <p>{article.body}</p>
            </div>
            <div className="card-action">
              <a href={`/articles/${article.id}`} className="btn waves-effect waves-light">Read Article</a>
            </div>
          </div>))} 
        </div>  
      </div>
    );
  }
}

export default Articles;
