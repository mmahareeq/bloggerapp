import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div className="header">
             <div className="headerTitle">
                 <span className="headerTitleSm">React & Node</span>
                 <span className="headerTitleLg">Blog</span>
             </div>
             <img className="headerImg" src="https://images.pexels.com/photos/3935575/pexels-photo-3935575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
        </div>
    )
}
