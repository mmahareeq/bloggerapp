import React from 'react'
import "./post.css"
import {Link} from 'react-router-dom'
export default function Post({post}) {
    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" className="postImg"/>
            <div className="postInfo">
               <div className="postCats">
                   {post.category.map(c=>
                       { return <span className="postCat">{c}</span>}
                   )}
                   
               </div>
               <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
               </Link>
               <hr/>
               <span className="postDate"> 
                    {new Date(post.createdAt).toDateString() }
                </span>

            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}
