import { Link } from "react-router-dom"
import "../Components/Navbar.css"


const Navbar = () => {
  return (
    <>
    <div className="main-div">
    <h3><Link className="link" to="">Register</Link></h3>
    <h3><Link className="link" to="/Login">Login</Link></h3>
    
    </div>
    </>
  )
}

export default Navbar
