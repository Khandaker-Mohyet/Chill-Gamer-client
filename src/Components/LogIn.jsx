import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const LogIn = () => {

  const { logInUser, googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handelGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
            const email = result?.user?.email;
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const logInInfo = {email, lastSignInTime }
        
        fetch(`https://assignment-10-server-dusky.vercel.app/users`, {
          method: "PATCH",
          headers: {
           'content-type':'application/json'
          },
          body:JSON.stringify(logInInfo)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            navigate('/');
            toast.success('Successfully login!')
        })
            })
            .catch(error => console.log('ERROR', error.message))
  }

  const handelLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, password)

    logInUser(email, password)
      .then(result => {
        console.log(result.user)
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const logInInfo = { email, lastSignInTime }
        
        fetch(`https://assignment-10-server-dusky.vercel.app/users`, {
          method: "PATCH",
          headers: {
           'content-type':'application/json'
          },
          body:JSON.stringify(logInInfo)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            navigate('/');
            toast.success('Successfully login!')
        })
        
      })
      .catch(error => {
        console.log(error)
        toast.error("email and password don't match")
    })
  }
  return (
    <div className='min-h-screen flex justify-center items-center -mt-14'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelLogIn}  className="card-body">
          <h2 className='text-2xl font-bold text-center'>Login your account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Login</button>
        </div>
        </form>
        <p className="text-center my-4">
            <button onClick={handelGoogleSignIn} className='btn btn-outline btn-success'>Google login</button>
            </p>
        <p className='text-center mb-3'>Dont’t Have An Account ? <Link className='text-red-600' to="/auth/register">Register</Link></p>
    </div>
    </div>
  );
};

export default LogIn;