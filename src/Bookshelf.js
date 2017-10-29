import React from 'react'
import Book from './Book'


function Bookshelf (props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (<li key={book.authors+book.title}><Book data={book}/></li>))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf