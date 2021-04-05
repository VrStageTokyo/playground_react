import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

//components

//images
import MainImage from './images/MainImage.png';

//styles
import './styles/Header.css'

const MenuBar = () => {
    return(
        <React.Fragment>
            <Router>
                <div class="AreaMenuBar">
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/movie/">Movie</Link></a>
                    <a><Link to="/article/">Article</Link></a>
                </div>
            </Router>
        </React.Fragment>
    );    
};

const Header = () => {
    return(
        <React.Fragment>
            <img src={MainImage} alt='メインイメージ' className='MainImage'/>
            <MenuBar/>
        </React.Fragment>
    );    
};

export default Header
