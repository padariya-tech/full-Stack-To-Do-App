import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/users/profile')
        
        if (data.error) {
          toast.error(data.error)
        } else {
          setUser(data.user)
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again later.")
      }
    }

    if (!user) {
      fetchData();
    }
  }, [user])

  return (
    <div>
      <h1>Dashboard</h1>
      {loading && <div>Loading...</div>}
      {user && <p>Welcome, {user.username}</p>}
    </div>
  )
}

export default Dashboard
