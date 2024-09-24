import { Link, useNavigate } from "react-router-dom";
import "../Components/Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(user !== null);
    
    // Redirect to home if logged in
    if (user) {
      navigate('/Home');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false); 
    navigate("/Login");
  };

  return (
    <div className="main-div">
      {!isLoggedIn ? (
        <>
          <h3><Link className="link" to="">Register</Link></h3>
          <h3><Link className="link" to="/Login">Login</Link></h3>
        </>
      ) : (
        <>
          <button onClick={handleLogout} className="btn">Logout</button>
        </>
      )}
    </div>
  );
}

export default Navbar;

