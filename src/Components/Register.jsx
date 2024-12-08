import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

  const { createUser, setUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()

  const handelRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photo = e.target.photo.value

    console.log(email, password, name, photo)

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
if (!regex.test(password)) {
  toast.error("Password must contain at least one uppercase and one lowercase letter");
  return
}

    createUser(email, password)
      .then(result => {
        console.log(result.user)

        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, createdAt }
        fetch('https://assignment-10-server-dusky.vercel.app/users', {
          method: 'POST',
          headers: {
           'content-type':'application/json'
          },
          body:JSON.stringify(newUser)

          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setUser(result.user)
            navigate('/');
            toast.success('Successfully Register!')
           })
          })

        .catch((error) => {
          console.log(error)
          toast.error("Invalid input")
        })

      })
      .catch(error => {
        console.log(error)
        toast.error("Invalid input")
    })
  }
  return (
    
    <div className='min-h-screen flex justify-center items-center '>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelRegister}  className="card-body">
          <h2 className='text-2xl font-bold text-center'>Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
              // type={showPassword ? "text" : "password"}
            type="password"  
            name="password"
            placeholder="password"
            className="input input-bordered" required />
          {/* <button type='button' onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-12">
            {
              showPassword? <FaEyeSlash /> : <FaEye />
            }
            </button> */}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Register</button>
        </div>
        </form>
        <p className='text-center mb-3'>Already Have An Account ? <Link className='text-green-600' to="/auth/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Register;