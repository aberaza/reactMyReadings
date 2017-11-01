import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Book from './Book'
//import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    static propTypes = {
        onUpdateBookStatus : PropTypes.func.isRequired,
        onSearchBooks : PropTypes.func.isRequired
    }

    state = {
        results : []
    }

    searchTimer = NaN;

    updateQuery = query => {
        console.log( `updateQuery(${query})` );
        (this.searchTimer && clearTimeout(this.searchTimer))

        if(query === ''){
            this.setState({results:[]});
            return;
        }

/* To prevent flooding with wueries while typing the search, launch search only after
250ms of the last keypress */
        this.searchTimer = setTimeout(
            _ => this.props.onSearchBooks(query.trim(), 30)
                .then( results => this.setState( {results} ) )
                .catch(console.warn)
        , 250);
    } 

    updateBookShelf = (book, shelf) => {
        this.props.onUpdateBookStatus(book, shelf);

        this.setState( ({results}) => {
            results.find(b=>b.id===book.id).shelf = shelf;
            return { results }
        })
    }

    clearQuery = _ => this.setState({results:[]})

    render(){
        return (
        <div className="search-books">
            <div className="search-books-bar">
        
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                        placeholder="Search by title or author"
                        onChange={e => this.updateQuery(e.target.value)}/>
        
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { this.state.results.map( b => (<li key={b.authors+b.title}><Book book={b} onUpdateBookStatus={this.updateBookShelf} /></li>)) }
                </ol>
            </div>
        </div>
        )
    }
}

export default SearchBooks
