import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import "./Search.css"
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function Search({hideButtons=false}) {
    const [input,setInput]=useState("");
    const history=useHistory();
    console.log(input);
    const search=(e)=>{
        e.preventDefault();
        // console.log("hit the search")
        history.push("/search")
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon/>
            </div>
            {!hideButtons ?
                ( <div className="search__buttons">
                <Button type="submit" onClick={search}  variant="outlined" >Google search</Button>
                <Button variant="outlined">I'm feeling lucky</Button>
            </div>) : 
             (<div className="search__buttons">
                <Button type="submit" onClick={search}  variant="outlined" className="search__buttonsHidden" >Google search</Button>
                <Button variant="outlined" className="search__buttonsHidden" >I'm feeling lucky</Button>
            </div> )   
            }
           
        </form>
    )
}

export default Search
