
// import { useRef } from 'react'
import { useForm } from 'react-hook-form';
import '../screen/Register.css'


const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const RegisterForm = (data)=>{
    console.log(data);
    
  }
  // const inputName = useRef()
  // const inputEmail = useRef()
  // const inputPassword = useRef()



  // const RegisterForm = (e)=>{
  //   e.preventDefault();
  //   console.log(inputName.current.value);
  //   console.log(inputEmail.current.value);
  //   console.log(inputPassword.current.value);
    
  // }

  return (
  <>
   <form className='form' onSubmit={handleSubmit(RegisterForm)}>
        <input className={`register-form ${errors.name ? 'input-error' : ''}`} type="text" placeholder='Enter Your Name' {...register ('name' , {required : 'Name is required'})}/>
        {errors.name && <p className='error-message'>{errors.name.message}</p>}

        <input className={`register-form ${errors.email ? 'input-error' : ''}`} type="email" placeholder='Enter Your Email' {...register('email' ,{required : 'Email is required' , pattern : {  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address',},})}/>
        {errors.email && <p className='error-message'>{errors.email.message}</p>}

        <input className={`register-form ${errors.password ? 'input-error' : ''}`} type="password" placeholder='Enter Your Password' {...register('password' , {required : 'Password is required' , minLength : {value : 6 , message: 'Password must be at least 6 characters',},})}/>
        {errors.password && <p className='error-message'>{errors.password.message}</p>}
        <button type='submit' className='btn'>Register</button>
      </form>
  </>
    
  )
}

export default Register
