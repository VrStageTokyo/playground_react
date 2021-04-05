import React from 'react';

//styles
import '../styles/Main.css';

//components
import Card from '../components/Card';

//data
import Data from '../jsons/data.json'

const Movie = (props) => {
    //Movies
    var Movies = [];
    for(var i=0; i<3; i++){
        Movies.push(<div className='Movie'><Card/></div>)
    }

    return(
        <React.Fragment>
            <div className='ui segment' id='AreaMovie'>
                <div className='TitleArea'><h1>Articles</h1></div>
                <div className='MovieContents'>
                    {Movies}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Movie