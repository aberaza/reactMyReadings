import React from 'react'

class Book extends React.Component {

    handleSelect= e => this.props.onUpdateBookStatus(this.props.data, e.target.value)

    render() {
        const {title, authors, imageLinks, shelf} = this.props.data;
        const thumbnail = `url(${imageLinks.thumbnail || imageLinks.smallThumbnail})`
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail }}></div>
                            <div className="book-shelf-changer">
                              <select value={shelf||"none"} onChange={this.handleSelect}>
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
}

export default Book