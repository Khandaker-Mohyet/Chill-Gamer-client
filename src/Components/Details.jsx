import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const gameDetails = useLoaderData()
  const { _id, photo, name, description, rating, year, genres, email, userName } = gameDetails
  // console.log(_id)
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
      </div>
    </div>

  );
};

export default Details;