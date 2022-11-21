import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FcGoogle} from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../../assets/images/login/login.svg'
import { AuthDataContext } from '../../UseContext/AuthContext';
import { apiToken } from '../../utlits/apitoken';

const Signup = () => {
  const {createUser, profileUpdate,setSign, googleLogin } = useContext(AuthDataContext);
  const navigate = useNavigate();
  
  const googleProvider = new GoogleAuthProvider();

  const googleSignin = () =>{
    googleLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
      apiToken(user)
      navigate('/')
      toast.success('Login Successfull',{autoClose:500})
    })
    .catch(error =>{
      toast.error(error)
    })

  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result =>{
      const user = result.user
      updateProfileData(name, photoURL)
      form.reset();
      apiToken(user)
      navigate('/')
      console.log(user);
      toast.success('Account Create SuccessFull', {autoClose:500})
    })
    .catch (error =>{
      toast.error(error)
    })

    const updateProfileData = (name, photoURL) =>{
      const profile = {
        displayName : name,
        photoURL:photoURL,

      }
      profileUpdate(profile)
      .then(()=>{
        setSign(profile)
      })
      .catch(error =>{
        console.log(error);
      })
    }
    
    

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
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="Your photoURL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" required name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" required name='password' placeholder="password" className="input  input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn hover:bg-orange-700 bg-orange-600 border-none">Sign up</button>
        </div>
      </form>
      <div className='text-center py-2 font-semibold text-base'>
        <p>or Sign up with</p>
    </div>
    <div className='py-6 text-2xl  flex justify-center'>
        <BsGithub className='mr-2'></BsGithub>
        <FcGoogle onClick={()=>googleSignin()} className='mr-2'></FcGoogle>
        <BsTwitter className='text-sky-500'></BsTwitter>
    </div>
    <div className='text-center pb-10 font-semibold'>
        <p>Already Have a account? <Link className='text-orange-500' to='/login'>Log In</Link></p>
    </div>
    </div>
    
  </div>
</div>
    );
};

export default Signup;