import React from 'react'
import "./posts.css"
import Post from '../post/Post'
export default function Posts({posts}) {
    return (
        <div className="post">
            {posts.map(p =>{ 

                 return <Post post={p}/>
                })}
           
            
        </div> 
    )
}
