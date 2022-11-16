import React, {useState, useEffect} from 'react'
import './App.css'

const Posts = () => {

// Komponentin state eli tila on posts
// setPosts funktiolla voi muuttaa posts nimistä tilaa
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)


useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) // muutetaan json data javascript muotoon
   
    .then(data => setTimeout(() => {setPosts(data)}, 2000) )
    //.then(data => setPosts(data)) <---- normaali tapa

}
    ,[])

return(
    <>
        <h2 onClick={() => setShowPosts(!showPosts)}>Posts</h2>

        {posts.length < 1 && <h2 style={{color: 'red'}}>Ladataan...</h2>}

        {showPosts && posts && posts.map(p => 
            <div className='posts'>
                <h4>{p.title}</h4>
                <p>User ID: {p.userId}</p>
                <p>{p.body}</p>
    
            </div>
        )
        }
    </>
)

}

export default Posts