import { Link, useNavigate } from "react-router-dom"
import "../Components/Navbar.css"
import { useEffect, useState } from "react"


const Navbar = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(user){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    navigate("/Login");
  }
  return (
    <div className="main-div">
    {!isLoggedIn ? (
       <>
        <h3><Link className="link" to="">Register</Link></h3>
        <h3><Link className="link" to="/Login">Login</Link></h3>
       </>
      ) : (
        <button onClick={handleLogout} className="btn">Logout</button>
      )}
    </div>
    
  )
}

export default Navbar
