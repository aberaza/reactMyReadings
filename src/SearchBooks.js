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
       // query : '',
        results : []
    }

    searchTimer = NaN;

    updateQuery = query => {
        console.log( `updateQuery(${query})` );
        (this.searchTimer && clearTimeout(this.searchTimer))

        if(query === ''){
           // this.setState({query:'', results:[]});
            this.setState({results:[]});
            return;
        }

        this.searchTimer = setTimeout(
            _=> this.props.onSearchBooks(query.trim(), 20)
            .then((results) => {console.dir(results); return results;})
            //.then((results)=>this.setState({query:query.trim(), results}))
            .then((results)=>this.setState({results}))
            , 150);
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
        {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
        */}
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
