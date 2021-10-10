import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const[posts, setPosts] = useState([])
    const[id, setId] = useState(1)
    const[idFromButton, setIdFromButton] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(response => setPosts(response.data) )
        .catch(err => console.log(err))
    }, [idFromButton])

     const handleButton = () => {
        setIdFromButton(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{posts.title}</div>
            <button type="button" onClick={handleButton}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map( post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
