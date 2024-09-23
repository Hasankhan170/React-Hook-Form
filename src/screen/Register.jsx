import { useForm } from 'react-hook-form';
import '../screen/Register.css'


const Register = () => {

  const navigate = use
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch('password', '');

  const RegisterForm = (data)=>{

    localStorage.setItem('email', data.email)
    localStorage.setItem('email', data.password)

    setTimeout(()=>{
      alert('Registration successful! Now you can log in.')
    },1000)
    
  }


  return (
  <>
   <form className='form' onSubmit={handleSubmit(RegisterForm)}>
        <input className={`register-form ${errors.name ? 'input-error' : ''}`} type="text" placeholder='Enter Your Name' {...register ('name' , {required : 'Name is required'})}/>
        {errors.name && <p className='error-message'>{errors.name.message}</p>}

        <input className={`register-form ${errors.email ? 'input-error' : ''}`} type="email" placeholder='Enter Your Email' {...register('email' ,{required : 'Email is required' , pattern : {  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address',},})}/>
        {errors.email && <p className='error-message'>{errors.email.message}</p>}

        <input className={`register-form ${errors.password ? 'input-error' : ''}`} type="password" placeholder='Enter Your Password' {...register('password' , {required : 'Password is required' , minLength : {value : 6 , message: 'Password must be at least 6 characters',},})}/>
        {errors.password && <p className='error-message'>{errors.password.message}</p>}
        {password && (<p className="password-strength">{password.length < 6 ? <span style={{color :'red'}}>Password is weak</span>: <span style={{color: '#06dc06'}}>Password is strong</span>}</p>)}

        <button type='submit' className='btn'>Register</button>
      </form>
  </>
    
  )
}

export default Register
