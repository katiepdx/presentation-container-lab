// holds the state for search, loading, and article state
// Needs a behavior test

import React, { Component } from 'react'
import { getNewsArticles } from '../services/news-api'
import Article from '../presentational/Article'
import Loading from '../presentational/Loading'

export default class NewsSearch extends Component {
  // set state 
  state = {
    loading: true,
    userSearch: 'bitcoin',
    foundArticles: []
  }

    // when page loads, fetch from API, update state, and change loading to false
    async componentDidMount() {
      // fetch from api using user's search
      const foundArticles = await getNewsArticles();
    
      // set state 
      this.setState({ foundArticles: foundArticles, loading: false})
    }

  render() {
        // deconstruct state 
        const { loading, foundArticles } = this.state;

        console.log(foundArticles, 'ARTICLES LIST IN STATE IN RENDER')
        // conditional rendering 
        if(loading) return <Loading />
    
        // Use array from state
        return (
          foundArticles.map(article => (<Article key={article.title} title={article.title} author={article.author} description={article.description}/>))
        )
      }
  }

