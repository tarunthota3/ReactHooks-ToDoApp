import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetching() {
    
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idfromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idfromButtonClick}` )
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
                
            })
    }, [idfromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text"
                value={id}
                onChange = {e => setId(e.target.value)}
                />
                <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;