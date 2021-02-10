import React, { Component } from 'react';
import './SearchFilter.css';

class SearchFilter extends Component {
    render() {
        return (
            <form className="search-filter">
                <label for='print-type'>Print Type</label>
                <select>
                    <option value='All'>All</option>
                </select>
                <label for='book-type'>Book Type</label>
                <select>
                    <option value='No Filter'>No Filter</option>
                </select>
            </form>  
        )
    }
}

export default SearchFilter;