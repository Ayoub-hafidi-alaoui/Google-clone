import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import "./Search.css"

function Search() {
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="serch__inputIcon"/>
                <input/>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Search