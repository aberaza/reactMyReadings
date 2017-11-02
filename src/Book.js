import React from 'react'
import PropTypes from 'prop-types'

function Book ({book, onUpdateBookStatus}) {
    const {title, authors, imageLinks, shelf} = book;
    const thumbnail = `url(${imageLinks.thumbnail || imageLinks.smallThumbnail})`;
        
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail }}></div>
                <div className={`book-shelf-changer shelf-${shelf||'none'}`}>
                    <select value={shelf||"none"} onChange={e => onUpdateBookStatus(book, e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{(authors && authors.join(', '))}</div>
        </div>
    )
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    onUpdateBookStatus : PropTypes.func.isRequired
};

export default Book