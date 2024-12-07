import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

  const { user, singInOut } = useContext(AuthContext)
  console.log(user)
  // console.log(user.photoURL)
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/"}><li><a>Home</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/allReviews"}><li><a>All Reviews</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/addReview"}><li><a>Add Review</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/myReviews"}><li><a>My Reviews</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/gameWatchList"}><li><a>Game Watch List</a></li></NavLink>
      </ul>
    </div>
    <img className="w-20 h-20 my-auto"  src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/"}><li><a>Home</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/allReviews"}><li><a>All Reviews</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/addReview"}><li><a>Add Review</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/myReviews"}><li><a>My Reviews</a></li></NavLink>
      <NavLink className={({ isActive }) => ` font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`} to={"/gameWatchList"}><li><a>Game Watch List</a></li></NavLink>
        </ul>
        
      </div>
      <ThemeToggle></ThemeToggle>
      <div className="navbar-end">
        {/* {
          user && user.email ? <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />: ""
        } */}
          {
          user && user?.email?<button onClick={singInOut} className="btn btn-success font-bold text-white">Log out</button> : <Link to="/auth/Login" className="btn btn-success font-bold text-white">Login</Link>
        }
  </div>
</div>
  );
};

export default Navbar;