import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FcGoogle} from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../../assets/images/login/login.svg'
import { AuthDataContext } from '../../UseContext/AuthContext';
import { apiToken } from '../../utlits/apitoken';

const Login = () => {
  const {user,googleLogin, setSign, userLogin} = useContext(AuthDataContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  const googleProvider = new GoogleAuthProvider();
  const googleSignin = ()=>{
    googleLogin(googleProvider)
    .then(result =>{
      const user = result.user
      console.log(user)
      apiToken(user)
      navigate(from, {replace:true})
      toast.success('Successfully Login', {autoClose:500})
    })
    .catch(error =>{
      toast.error(error)
        })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const password = form.password.value;

    userLogin(email,password)
    .then(result =>{
      const user = result.user;
      apiToken(user)
      navigate(from, {replace:true})

    })
    .catch(error =>{
      toast.error(error)
    })
  }

    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 px-5 lg:text-left">
      <img src={login} className='h-full' alt="" />
    </div>
    <div className="card w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input  input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn hover:bg-orange-700 bg-orange-600 border-none">Login</button>
        </div>
      </form>
      <div className='text-center py-2 font-semibold text-base'>
        <p>or Sign In with</p>
    </div>
    <div className='py-6 text-2xl  flex justify-center'>
        <BsGithub className='mr-2'></BsGithub>
        <FcGoogle onClick={()=>googleSignin()} className='mr-2'></FcGoogle>
        <BsTwitter className='text-sky-500'></BsTwitter>
    </div>
    <div className='text-center pb-10 font-semibold'>
        <p>Have a account? <Link className='text-orange-500' to='/signup'>Sign up</Link></p>
    </div>
    </div>
    
  </div>
</div>
    );
};

export default Login;