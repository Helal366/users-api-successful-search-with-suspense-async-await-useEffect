import React from 'react';
import './Search-module.css'

const Search = ({searchText, setSearchText}) => {
    
    return (
        <div className='search-div'>
            <input 
            type="text" 
            placeholder='Search user...'
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}/>
        </div>
    );
};

export default Search;