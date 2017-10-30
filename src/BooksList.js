import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class BooksList extends Component {

  render() {
    return ( 
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Bookshelf name="Currently Reading" books={this.props.books.filter(book => book.status==="reading")} onUpdateBookStatus={this.props.onUpdateBookStatus} />
                  <Bookshelf name="Want to Read" books={this.props.books.filter(book => book.status==="wishlist")} onUpdateBookStatus={this.props.onUpdateBookStatus} />
                  <Bookshelf name="Read" books={this.props.books.filter(book => book.status==="read")} onUpdateBookStatus={this.props.onUpdateBookStatus}/>
              </div>
            </div>
            <div className="open-search">
                <Link to="/search">Ass a book</Link>
            </div>
          </div>
       )
    }
}

export default BooksList