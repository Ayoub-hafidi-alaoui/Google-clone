import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import "./Search.css"
import { Button } from '@material-ui/core';

function Search() {
    const search=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input/>
                <MicIcon/>
            </div>
            <div className="search__buttons">
                <Button onClick={search} </Button> variant="outlined" >Google search</Button>
                <Button variant="outlined">I'm feeling lucky</Button>
            </div>
        </div>
    )
}

export default Search
