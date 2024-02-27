import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login2() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username:'',
    password:''
  })

  const loginform = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const {data} = await axios.post('users/login', { username, password });
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      }
      else {
        setData({
          username:'',
          password:''
        })
        toast.success("Login Successful");
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
    <form onSubmit={loginform}>
      
      <br /><br />
      <label>Username </label>
      <input type="text" placeholder='Enter your username' value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} />
      
      <label>Password </label>
      <input type="text" placeholder='Enter your password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} /><br /><br />
      <button type="submit">Login</button>
    </form>
   </div>
  )
}

export default Login2