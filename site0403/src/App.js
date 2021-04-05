import React from 'react';

//Router
import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom";

//images
import MainImage from './images/MainImage.png';

// components
import Home from './Main/Home';
import Movie from './Main/Movie';
import Article from './Main/Article';
import AboutUs from './Main/AboutUs';
import SiteMap from './Main/SiteMap';
import Policy from './Main/Policy';

// CSS
import './styles/App.css';

const App = () => {
    return(
        <React.Fragment>
            <Router>
                <div id='header'>
                    <img src={MainImage} alt='main image' className='MainImage'/>
                    <div className="AreaMenuBar">
                        <a><Link to="/">Home</Link></a>
                        <a><Link to="/movie/">Movie</Link></a>
                        <a><Link to="/article/">Article</Link></a>
                    </div>
                </div>
                <div id='main'>
                    <Route path="/" exact component={Home} />
                    <Route path="/movie/" exact component={Movie} />
                    <Route path="/article/" exact component={Article} />
                    <Route path="/aboutus/" exact component={AboutUs} />
                    <Route path="/sitemap/" exact component={SiteMap} />
                    <Route path="/policy/" exact component={Policy} />
                </div>
                <div id='footer'>
                    <img src={MainImage} alt='footer image' className='FooterImage'/>
                    <div className="AreaFooterMenu">
                        <a><Link to="/aboutus/">AboutUs</Link></a>
                        <a><Link to="/sitemap/">SiteMap</Link></a>
                        <a><Link to="/policy/">Policy</Link></a>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App