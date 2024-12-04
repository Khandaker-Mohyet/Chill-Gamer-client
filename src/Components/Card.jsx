

const Card = ({ game }) => {
  const {_id, photo, name, rating, genres } = game
  return (
    <div className="card bg-base-100 w-[350px] shadow-xl mb-10 mx-auto">
  <figure>
    <img className="w-full h-44"
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
          <div className="badge badge-secondary">{genres}</div>
    </h2>
    <p className="mt-3 text-left font-bold">Rating: <div className="rating rating-sm">
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
    <div className="card-actions justify-center">
      <button className="btn btn-success text-white btn-sm mt-5 w-full">Explore Details</button>
    </div>
  </div>
</div>
  );
};

export default Card;