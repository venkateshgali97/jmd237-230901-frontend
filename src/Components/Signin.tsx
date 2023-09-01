import '../Styles/Signin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

interface signInDetails{
    email : string,
    password : string
}
const Signin =()=>{
    const [signInDetails,setSignInDetails] = useState<signInDetails>({
        "email":'',
        "password":''
    })
    const navigate = useNavigate()
    const signInInputHandler = (e:React. ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.id)
        setSignInDetails({...signInDetails,[e.target.id] : e.target.value})
    }
    const signInFormHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const {email,password} = signInDetails
        if (email.trim().length < 1){
                toast.error("Email is required")
        }
        else if (password.trim().length < 1){
            toast.error("Password is required")
        }
        else{
            const options = {
                method : "post",
                headers : {
                    'Content-Type' : "application/json",
                    'accept': 'application/json'
                },
                body :  JSON.stringify(signInDetails)   
            }
            fetch("http://localhost:8001/login",options).then((res) =>{
                if(res.status == 400){
                    toast.warning("Email is Not found")           
                }
                else if(res.status == 201){
                    toast.success("Login successful")
                    navigate("/profile")
                    localStorage.setItem("user",email)
                }else if (res.status == 404){
                    toast.warning("Login Failed...")
                }
            }).catch((err) => console.log(err))
        }
    }
    return(
        <div className="signin-container">
            <h1 className="form-heading">Login Form</h1> 
            
            <form className='form-container' onSubmit={signInFormHandler}>
                <div>
                    <label htmlFor='email' className="form-label" >Email : </label>
                    <input type='email' id='email' className="input-elements" placeholder='Enter Your Email id' onChange={signInInputHandler} ></input>
                </div>
                <div>
                    <label htmlFor='password' className="form-label" >Password : </label>
                    <input type='text' id='password' className="input-elements" placeholder='Enter Your Password' onChange={signInInputHandler}></input>
                </div>
                <div className='forget-password-container'>
                    <p>Forget password? <span>Click here</span></p>
                </div>
                <div className='button-container'>
                    <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
    )
}

export default Signin