
import '../screen/Login.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const loginForm = (data) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

   
    if (data.email === storedEmail && data.password === storedPassword) {
      alert('Login successful!');
      navigate('/Home'); 
    } else {
      alert('Incorrect email or password.');
    }
  };


  return (
    <>
    <form className="form" onSubmit={handleSubmit(loginForm)}>
        <input
          className={`register-form ${errors.email ? 'input-error' : ''}`}
          type="email"
          placeholder="Enter Your Email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          className={`register-form ${errors.password ? 'input-error' : ''}`}
          type="password"
          placeholder="Enter Your Password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </>
  )
}

export default Login
