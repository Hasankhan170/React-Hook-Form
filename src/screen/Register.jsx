
import { useRef } from 'react'
import '../screen/Register.css'

const Register = () => {
  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  return (
  <>
   <form className='form'>
        <input className='register-form' type="text" placeholder='Enter Your Name' ref={inputName}/>
        <input className='register-form' type="email" placeholder='Enter Your Email' ref={inputEmail}/>
        <input className='register-form' type="password" placeholder='Enter Your Password' ref={inputPassword}/>
        <button className='btn'>Register</button>
      </form>
  </>
    
  )
}

export default Register
