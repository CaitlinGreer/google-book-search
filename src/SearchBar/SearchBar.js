import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div> 
                    Search: <input type="text" placeholder="input search term here"/>
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;