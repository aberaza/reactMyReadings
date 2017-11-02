import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function Bookshelf ({name, books, onUpdateBookStatus}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (<li key={book.id}><Book book={book} onUpdateBookStatus={onUpdateBookStatus} /></li>))}
                </ol>
            </div>
        </div>
    )
}

Bookshelf.propTypes = {
    name: PropTypes.string.isRequired,
    books : PropTypes.array.isRequired,
    onUpdateBookStatus : PropTypes.func.isRequired
}

export default Bookshelf