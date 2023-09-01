import "../Styles/AuthPage.css"
import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Link, Routes,Route } from "react-router-dom";
const AuthPage = () =>{
    const [signInPageStatus,setSignInPageStatus] = useState<Boolean>(false)
    return(
        <div className="auth-container">
            <div className="auth-container-centerbox">
                <div className="auth-container-button">
                    <button  onClick={() => {
                       setSignInPageStatus(true)
                        
                    }
                      } className={`${signInPageStatus ? 'active' : ''}`}>
                           Sign in 
                    </button>
                    <button onClick={() => {
                       setSignInPageStatus(false)
                    }}
                    className={`${!signInPageStatus ? 'active' : ''}`}> Sign up</button>
               </div>
                {(signInPageStatus) ? <Signin /> : <Signup />}
            </div>
          
        </div>
        
    )
}

export default AuthPage