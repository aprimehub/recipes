// import logo from './logo.svg';
import React from 'react';
// import reactDom from 'react-dom';
import './App.css';
import {client} from './client.js';
import Recipe from './Recipe'


class App extends React.Component{
  state={
    articles:[]
  }
  componentDidMount() {
   client.getEntries() 
   .then((response) => {
    //  console.log(response)
     this.setState({
       articles:response.items
     })
   })
   .catch(console.error)
 } 
  render() {
    console.log(this.state.articles)
    return (
      <div className='App'>
        <h1>React and Contentful</h1>
        <div>
          <main>
            <div className='container'>
              {
                this.state.articles.map((recipe,index) => {
                  // console.log('hi',recipe.fields.pic.fields.file.url);
                  return <Recipe
                    key={index}
                    title={recipe.fields.title}
                    description={recipe.fields.description}
                    pic={recipe.fields.pic.fields.file.url}
                    category={recipe.fields.category}
                    ingredients={recipe.fields.ingredients}
                  />
                })
              }
            </div>
          </main>
        </div>
    </div>
  );
}}

export default App;
