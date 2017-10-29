import React, { Component } from 'react';
import Bookshelf from './Bookshelf'

class BooksList extends Component {

  render() {
    return ( 
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Bookshelf name="Currently Reading" books={this.props.books.filter(book => book.status==="reading")}/>
                  <Bookshelf name="Want to Read" books={this.props.books.filter(book => book.status==="wishlist")}/>
                  <Bookshelf name="Read" books={this.props.books.filter(book => book.status==="read")}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={()=>this.props.showSearchPage(true)}>Add a book</a>
            </div>
          </div>
       )
    }
}

export default BooksList