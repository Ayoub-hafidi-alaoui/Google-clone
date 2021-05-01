import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import "./Home.css"
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

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
            <div className="home__body">
                <img src="https://i0.wp.com/www.grapheine.com/wp-content/uploads/2015/09/nouveau-logo-google.gif?fit=1950%2C1200&quality=90&strip=all&ssl=1" />
                <div className="home__inputContainer">
                    <Search/>  
                </div>
            </div>
        </div>
    )
}

export default Home
