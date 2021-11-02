
import './settings.css'
import Siderbar from '../../components/siderbar/Siderbar'
export default function Settings() {
    return (
        <div className="setting">
            <div className="settingWrapper">
               <div className="settingTitle">
                   <span className="settingUpdate"> Update Your Account</span>
                   <span className="settingDelete"> Delete Account</span>
                </div>
                  <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingpp">
                        <img 
                         src="https://images.pexels.com/photos/7536199/pexels-photo-7536199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         alt=""/>

                        <label htmlFor="fileInput">
                           <i className=" settingIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="maraim"/>
                    <label>Email</label>
                    <input type="email" placeholder="maraim@gmail.com"/>
                    <label>Password</label>
                    <input type="password" />
                     <button className="ppsumbit">Upadate</button>
                  </form>
                
            </div>
            <Siderbar/>
        </div>
    )
}
