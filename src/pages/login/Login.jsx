import React ,{useRef,useContext}from 'react'
import {Context} from '../context/Context'
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {user,dispatch,isFetching} = useContext(Context);

    const handleSumbit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
           const res = axios.post("/auth/login",{
               username:userRef.current.value,
               password:passwordRef.current.value,

           });
           dispatch({type:"LOGIN_SUCCESS",payload:res.data});
   
        }catch(err)
        {
             dispatch({tyep:"LOGIN_FAILURE"});
        }
        

    }
    console.log(user)
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSumbit}>
                <label>Username</label>
                <input type="email" className="loginInput" placeholder="Enter your username ..." ref={userRef}/>
            
                <label>password</label>
                <input type="password" className="loginInput" placeholder="Enter your password ..." ref={passwordRef}/>
                <button className="loginbtn" type="sumbit">Login</button>
            </form>
            <button className="loginReg"><Link to="/register" className="link">Register</Link></button>
        </div>
    )
}
