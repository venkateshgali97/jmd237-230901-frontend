import '../Styles/Profile.css'
import { useNavigate,Link } from 'react-router-dom'
import { useState,useEffect} from 'react'
interface signInUserDetails{
    name :string,
    email : string,
    phone_number:string
}
const Profile = () =>{
    const navigate = useNavigate()
    const [signInUserDetails,setSignInUserDetails] = useState<signInUserDetails>({
        "name" : "",
        "email" :"",
        "phone_number" :""
    })
    const [loginUser,setLoginUser] = useState(true)


    const signInuserApi = () =>{
        
        const options = {
            method : "get",
            headers : {
                'Content-Type' : "application/json",
                'accept': 'application/json'
            } 
        }
        const user = localStorage.getItem("user")
        fetch(`http://localhost:8001/user/?email=${user}`,options).then((res) =>res.json()).then((res) => setSignInUserDetails(res[0]))
      
    }
    
    useEffect(() =>{
        const user = localStorage.getItem("user")
        if (user == null){
            navigate("/")
        }
        else{
            signInuserApi()
        }
        
    },[])

    return(
        <div className="dashboard-container">
            <div className="side-nav">
                <ul className='side-nav-items'>
                    <li>Dashboard</li>
                    <li>Time sheet</li>
                    <li>Leave</li>
                    <li>Work From Home</li>
                    <li>Survey</li>
                    <li>Service Desk</li>
                    <li>Forms</li>
                    <li>Travel</li>
                    <li>Expenses</li>
                    <li>Resourcing</li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <div className='dashboard-profile-container'>
                    <p className='dashboard-profile-name'>{signInUserDetails.name}</p>
                    <i className="fa-solid fa-right-from-bracket" onClick={() => {
                        navigate("/")
                        localStorage.removeItem("user")
                    }
                    }></i>
                </div>
            </div>
            <div className="main-content">
            <section style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
                <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                    <div className="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        className="rounded-circle img-fluid" style={{ width: '150px' }} />
                        <h5 className="my-3">{signInUserDetails.name}</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">JMAN Chennai</p>
                        <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary">Follow</button>
                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">name</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{signInUserDetails.name}</p>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{signInUserDetails.email}</p>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">{signInUserDetails.phone_number}7</p>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Emergency contact</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">9490859547</p>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                            <p className="text-muted mb-0">Taramani, Chennai</p>
                        </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
                </div>
            </div>
    </section>
            </div>
        </div>
    )
}

export default Profile