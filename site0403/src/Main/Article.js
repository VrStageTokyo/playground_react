import React from 'react';

//styles
import '../styles/Main.css';

//components
import Card from '../components/Card';

//data
import Data from '../jsons/Article.json'

const Article = (props) => {
    //Articles
    var Articles = [];
    var Row = [];
    for(Row in Data){
        Articles.push(<div className='Article'>{Row.date}</div>)
    }

    return(
        <React.Fragment>
            <div className='ui segment' id='AreaArticle'>
                <div className='TitleArea'><h1>Articles</h1></div>
                <div className='ArticleContents'>
                    {Articles}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Article