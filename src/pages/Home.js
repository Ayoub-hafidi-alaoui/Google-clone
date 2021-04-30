import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import "./Home.css"
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="about">about</Link>
                    <Link to="store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="gmail">Gmail</Link>
                    <Link to="Images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
