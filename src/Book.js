import React from 'react'

class Book extends React.Component {

    handleSelect= (e)=>{
        console.log(e.target.value);
        let book = this.props.data;
        book.status = e.target.value;
        this.props.onUpdateBookStatus(book);
    }

    render() {
        const {title, authors, cover, status} = this.props.data;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: cover }}></div>
                            <div className="book-shelf-changer">
                              <select value={status} onChange={this.handleSelect}>
                                <option value="none" disabled>Move to...</option>
                                <option value="reading">Currently Reading</option>
                                <option value="wishlist">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors}</div>
                        </div>

        )
    }
}

export default Book