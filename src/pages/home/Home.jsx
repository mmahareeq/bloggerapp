import React,{useState,useEffect} from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Siderbar from '../../components/siderbar/Siderbar'
import {useLocation} from 'react-router-dom'
import axios from "axios"
export default function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async() =>{
          const res = await axios.get("/posts")
          console.log(res.data)
          setPosts(res.data)
        }
        fetchPosts();
    }, [])
    useEffect(() => {
        const fetchPosts = async() =>{
          const res = await axios.get("/posts"+ search)
          console.log(res.data)
          setPosts(res.data)
        }
        fetchPosts();
    }, [search])
     
    return (
        <React.Fragment>
           <Header/>
           <div className="home">
             <Posts posts={posts}/>
             <Siderbar/>
             
            </div>
        </React.Fragment>
       
    )
}
