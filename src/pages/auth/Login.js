import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Jumbotron from "../../components/cards/Jumbotron";
import {useAuth} from "../../context/auth";
import { useNavigate , useLocation} from "react-router-dom";
export default function Login() {
    //State
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    //hook
    const [auth,setAuth]=useAuth();
    const navigate = useNavigate();
    const location=useLocation();

  

    const handleSubmit=async(e)=>{
        e.preventDefault(); 
        try{
            const {data}=await axios.post(`/login`,{email,password});
            
            if(data?.error){
                toast.error(data.error)   }
                else{
                    localStorage.setItem('auth',JSON.stringify(data));
                    setAuth({...auth,token:data.token, user:data.user});
                    toast.success("login successful");
                    navigate(location.state||`/dashboard/${data?.user?.role===1? 'admin':'user'}`);
                }         
        }catch(err)
        {
            console.log(err);
            toast.error('login failed, try Again!');
        }
    }
    return (
     <div>
      <Jumbotron title="Login"  />
       
      <div className="container">
        <div className="row">
           <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>

        <input type="email" className="form-control mb-4 p-2" placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
            <input type="password" className="form-control mb-4 p-2" placeholder="Enter your Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
           
            />
            
            <button className="btn btn-primary" type="submit" 
            onClick={handleSubmit}>Submit</button>
            </form>
            
            </div> 
        </div>
      </div>
     
    
      </div>
    );
  }
  