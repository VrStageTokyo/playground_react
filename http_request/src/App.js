import React, {useState} from 'react';

import jsonplaceholder from './apis/jsonplaceholder';
import Resources from './compornents/Resources';
import Button from './compornents/Button';


const App=()=>{
    const [resources, setResources] = useState([]);

    async function getPosts(){
        try{
            const posts = await jsonplaceholder.get('/posts');
            setResources(posts.data);
        }catch(err){
            console.log(err);
        }
    };

    async function getAlbums(){
        try{
            const albums=await jsonplaceholder.get('/albums');
            setResources(albums.data)
        }catch(err){
            console.log(err);
        }
    };

    return(
        <div className='ui container' style={{marginTop: '30px'}}>
            <Button  onClick={getPosts} color='primary' text='posts' />
            <Button  onClick={getAlbums} color='red' text='albums' />
            <Resources resources={resources} />
        </div>
    );
};

export default App;
