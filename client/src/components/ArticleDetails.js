import React, { Component } from 'react'; 
import axios from 'axios'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: []
    } 
  }

  componentWillMount(){
    this.getArticles();
  } 

  getArticles(){
    // Make a request for a user with a given ID
    axios.get(`/api/v1/articles${props.match.something}`)
      .then(response => {
        this.setState({articles: response.data.data}) 
        console.log(this.state.articles)
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div className="App"> 
         <h1>Articles</h1>
         <ul>
          {this.state.articles.map(article => (
            <li key={article.id} >{article.title}
              <div>{article.body}</div>
            </li>
          ))}
          </ul>
      </div>
    );
  }
}

export default App;
