import { useState } from "react"
import {  toast } from 'react-toastify';

interface userDetails {
    name:string;
    email:string;
    password:string,
    phone_number:string
}
const Signup = () =>{
    const [signupDetails,setSignUpDetails] = useState<userDetails>({
        'name' : "",
        'email':"",
        'password':"",
        'phone_number':""
    })

    const userDetailsInputHandler = (e: React. ChangeEvent<HTMLInputElement>) =>{
        setSignUpDetails({...signupDetails,[e.target.id]:e.target.value})
    }

    const userRegistrationHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const {name,email,password,phone_number} = signupDetails || {}
        if (name.trim().length < 1){
            toast.error("Name is required")
        }
        else if (email.trim().length < 1){
            toast.error("email is required")
        }
        else if (password.trim().length < 1){
            toast.error("Password is required")
        }
        else if (phone_number.trim().length < 1){
            toast.error("Phone number is required")
        }
        else{
            const options = {
                method : "post",
                headers : {
                    'Content-Type' : "application/json",
                    'accept': 'application/json'
                },
                body :  JSON.stringify(signupDetails)   
            }
           
            fetch("http://localhost:8001/newUser",options).then((res) =>{
                if(res.status == 201){
                    toast.success("Registration Successful")           
                }
                else if(res.status == 404){
                    toast.warning("Email is already existed..")
                }
            }).catch((err) => console.log(err))
        }
       
    }
    return(
        <div>
            <div className="signup-container">
            <h1 className="form-heading">Registration Form</h1>  
            <form className='form-container' onSubmit={userRegistrationHandler}>
               <div>
                    <label htmlFor='name' className="form-label" >Name : </label>
                    <input type='text' id='name' className="input-elements" placeholder='Enter Your Name' onChange={userDetailsInputHandler}></input>
                </div>
                <div>
                    <label htmlFor='email' className="form-label" >Email : </label>
                    <input type='email' id='email' className="input-elements" placeholder='Enter Your Email' onChange={userDetailsInputHandler}></input>
                </div>
                <div>
                    <label htmlFor='password' className="form-label" >Password : </label>
                    <input type='password' id='password' className="input-elements" placeholder='Enter password' onChange={userDetailsInputHandler}></input>
                </div>
                <div>
                    <label htmlFor='phone_number' className="form-label" >Phone Number : </label>
                    <input type='text' id='phone_number' className="input-elements" placeholder='Enter Your phone number' onChange={userDetailsInputHandler}></input>
                </div>
                <div className='button-container'>
                    <button type="submit">Register</button>
                </div>   
            </form>
        </div>
        </div>
    )
}

export default Signup