import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./siderbar.css"
export default function Siderbar() {
    const [cat,setCat] = useState([]);
    useEffect(()=>
    {
       const getCat = async()=>
       {
           const res = await axios.get("/categories");
           setCat(res.data);
       }
       getCat();
    },[])

    return (
        <div className="siderbar">
            <div className="siderbarItem">
               <span className="siderbarTitle">ABOUT ME</span>
               <img src="https://images.pexels.com/photos/3412697/pexels-photo-3412697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300" alt="" className=""/>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley</p>

            </div>
            <div className="siderbarItem">
                <span className="siderbarTitle">CATEGORIES</span>
                <ul className="siderbarList">
                    {cat.map(c=>{
                      return(
                          <Link className="link" to={`/?cat=${c.name}`}> 
                            <li className="siderbarListItem">{c.name}</li>
                          </Link>
                     )
                    })}
                    
                    </ul>

            </div>
            <div className="siderbarItem">
              <span className="siderbarTitle">FOLLOW US</span>
              <div className="siderbarSocial">
                    <i className="siderbarIcon fab fa-facebook-square"></i>
                    <i className="siderbarIcon fab fa-pinterest-square"></i>
                    <i className="siderbarIcon fab fa-twitter-square"></i>
              </div>

            </div>
        </div>
    )
}
