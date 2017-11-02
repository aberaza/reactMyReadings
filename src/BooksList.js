import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

function BooksList({books, onUpdateBookStatus}) {
    return ( 
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf name="Currently Reading" books={books.filter(book => book.shelf==="currentlyReading")} onUpdateBookStatus={onUpdateBookStatus} />
                    <Bookshelf name="Want to Read" books={books.filter(book => book.shelf==="wantToRead")} onUpdateBookStatus={onUpdateBookStatus} />
                    <Bookshelf name="Read" books={books.filter(book => book.shelf==="read")} onUpdateBookStatus={onUpdateBookStatus}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Ass a book</Link>
            </div>
        </div>
    );
}

BooksList.propTypes = {
      books : PropTypes.array.isRequired,
      onUpdateBookStatus : PropTypes.func.isRequired
};

export default BooksList