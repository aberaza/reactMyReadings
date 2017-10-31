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

  updateBookStatus = (book, shelf)=> {
    BooksAPI.update(book,shelf)
      .then(BooksAPI.getAll)
      .then(booksList => this.setState({booksList}));
  }

  addBook(book){

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} onUpdateBookStatus={this.updateBookStatus} />
        <Route exact path="/" render={()=> (
          <BooksList books={this.state.booksList} onUpdateBookStatus={this.updateBookStatus} />
          )} />
      </div>
    )
  }
}

export default BooksApp
