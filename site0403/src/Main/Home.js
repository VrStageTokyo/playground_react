import React from 'react';

//styles
import '../styles/Main.css';

//components
import Card from '../components/Card';

//data
import Data from '../jsons/data.json'

const Home = (props) => {
    var News = [];
    for(var datecode in Data.Data.Articles){
        News.push(<div className='News'><p>{datecode}</p></div>)
    }

    //PickupArticles
    var Articles = [];
    for(var i=0; i<3; i++){
        Articles.push(<div className='PickupArticle'><Card/></div>)
    }
    //PickupMovies
    var Movies = [];
    for(var i=0; i<3; i++){
        Movies.push(<div className='PickupMovie'><Card/></div>)
    }

    return(
        <React.Fragment>
            <div className='ui segment' id='AreaNews'>
                <div className='TitleArea'>
                    <h1>News</h1>
                </div>
                <div className='AreaNewsContents'>
                    {News}
                </div>
            </div> 

            <div className='ui segment' id='AreaPickupMovie'>
                <div className='TitleArea'><h1>Pickup Movies</h1></div>
                <div className='PickupMovieContents'>
                    {Movies}
                </div>
            </div>

            <div className='ui segment' id='AreaPickupArticle'>
                <div className='TitleArea'><h1>Pickup Articles</h1></div>
                <div className='PickupArticleContents'>
                    {Articles}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home