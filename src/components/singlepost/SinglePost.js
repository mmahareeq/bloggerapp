
import {useEffect,useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import axios from 'axios'
import './singlepost.css'

export default function SinglePost() {
    const location = useLocation(); // can use useParams()
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState([]);
    useEffect(()=>
    {
        const getPost = async()=>
        {
          const res =await axios.get("/posts/"+path);
          console.log(res.data);
          setPost(res.data);
        }
        getPost();

    },[path])
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/9789946/pexels-photo-9789946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="" className="singlePostImg"/>
            <h1 className='singlePostTitle'>{post.title}
            <div className="singlePostEdit">
                <i className="signalPostIcon fas fa-edit"></i>
                <i className="signalPostIcon fas fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                   Author:
                   <Link to={`/?user=${post.username}`} className="link" >
                     <b>{post.username}</b>
                   </Link>
                    
              </span>
              <span className="singlePostDate"> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
             {post.desc}
            </p>
            </div>
        </div>
    )
}
