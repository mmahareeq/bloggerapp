import React from 'react'
import "./topbar.css"
import { Link} from 'react-router-dom'
export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <React.Fragment>
                <div className="topLeft">
                    <i className=" topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                       <li className="topListItem">
                            <Link to="/" className="link">
                               HOME
                            </Link></li>
                       <li className="topListItem"><Link to="" className="link">ABOUT</Link></li>
                       <li className="topListItem"><Link to="" className="link">CONTACT</Link></li>
                       <li className="topListItem">
                          <Link to="/write" className="link">
                             WRITE
                           </Link>
                        </li>
                       <li className="topListItem">{user &&<Link to="" className="link">LOGOUT</Link>}</li>
                    
                    </ul>

                </div>
                <div className="topRight">
                {user ?(
                    <img className="topImg" src="https://images.pexels.com/photos/7536199/pexels-photo-7536199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    
                    ):
                    (  <ul className="topList">
                           <li className="topListItem"> <Link className="link" to="/login">LOGIN</Link></li>
                           <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                    )}
                    <i className="searchIcon fas fa-search"></i> 
                </div>
            </React.Fragment> 
        </div>
    )
}
