
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Details = () => {
  const { user } = useContext(AuthContext)
  const mail = user.email;
  const gameDetails = useLoaderData()
  const { photo, name, description, rating, year, genres, email, userName } = gameDetails
  

  const addWishlist = (email) => {
   
    console.log(email)
    
    const watchList =  { mail, photo, name, description, rating, year, genres, email, userName }

    fetch('http://localhost:4000/watchList', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(watchList )
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
                title: 'success',
                text: 'Add watch list successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          
          }
    })
  }
  return (
      <div className="max-w-md mx-auto mb-20 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img className="w-full h-56 object-cover" src={photo} alt={name} />
      
      {/* Content */}
      <div className="p-4">
        {/* Game Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        
        {/* Description */}
        <p className="text-base text-gray-600 mb-4">
          {description}
        </p>
        
        {/* Game Details */}
        <div className="mb-4">
          <p className="mt-3 font-bold">Rating: <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-300" />
  
         </div> {rating}</p>
          <p className="text-base text-gray-800"><strong>Release Year:</strong> {year}</p>
          <p className="text-base text-gray-800"><strong>Genres:</strong> {genres}</p>
        </div>
        
        {/* Author Details */}
        <div className="border-t pt-3">
          <p className="text-base text-gray-600"><strong>Submitted by:</strong> {userName}</p>
          <p className="text-base text-gray-600"><strong>Email:</strong> {email}</p>
        </div>
        
        <div className="pt-3">
          <button onClick={()=>addWishlist()} className="btn btn-success text-white btn-sm mt-5 w-full">
            Add to Watch List</button>
        </div>
      </div>
    </div>

  );
};

export default Details;