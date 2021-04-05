import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const MenuBar = () => {
    return(
        <React.Fragment>
            <Router>
                <div class="ui secondary pointing menu">                
                        <a class="active item">Home</a>
                        <a class="item">Movie</a>
                        <a class="item">Article</a>
                    <div class="right menu">
                        <a class="ui item">
                        Logout
                        </a>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );    
};

export default MenuBar