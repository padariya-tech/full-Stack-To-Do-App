import React,{useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    Fullname:'',
    username:'',
    email:'',
    password:''
  })

  
    const signupform = async (e) => {
      e.preventDefault();
      const { Fullname, username, email, password } = data;
      // toast.success("Register Successful Welcome To The App");console.log("jay hind ");
      try {
        const {data}  = await axios.post('users/signup', { Fullname, username, email, password });
        console.log(data.error);
        
        if (data.error) {
          toast.error(data.error);
        }else {
          setData({
            Fullname: '',
            username: '',
            email: '',
            password: ''
          });
          toast.success("Register Successful Welcome To The App");
          navigate('/login');
        }
    
      } catch (error) {
        
      
        console.log(error);
    }
  }

  return (
   <div>
    <form onSubmit={signupform}>
      <label>FullName </label>
      <input type="text" placeholder='Enter your name' value={data.Fullname} onChange={(e)=>setData({...data,Fullname:e.target.value})} />
      <br /><br />
      <label>Username </label>
      <input type="text" placeholder='Enter your username' value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} />
      <br /><br />
      <label>Email </label>
      <input type="text" placeholder='Enter your email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
      <br /><br />
      <label>Password </label>
      <input type="text" placeholder='Enter your password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} /><br /><br />
      <button type="submit">Signup</button>
    </form>
   </div>
  )
}

export default Signup