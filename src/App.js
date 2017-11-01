import React from 'react'
import { Route } from 'react-router-dom'

import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksList: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(booksList => this.setState({booksList}));
  }

  updateBookStatus = (book, shelf)=> BooksAPI.update(book,shelf)
      .then(BooksAPI.getAll)
      .then(booksList => this.setState({booksList}));

  searchBooks = (query, maxResults=20) => BooksAPI.search(query, maxResults)
      .then(books => books.map(book => this.state.booksList.find(b=> b.id === book.id) || book))
      .catch(err => { console.warn(err); return [];});

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks onUpdateBookStatus={this.updateBookStatus} onSearchBooks={this.searchBooks}/>
        )}/> 
        <Route exact path="/" render={()=> (
          <BooksList books={this.state.booksList} onUpdateBookStatus={this.updateBookStatus} />
          )} />
      </div>
    )
  }
}

export default BooksApp
