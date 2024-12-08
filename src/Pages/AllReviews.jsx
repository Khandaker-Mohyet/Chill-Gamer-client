import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";
import { useState } from "react";


const AllReviews = () => {
  const loadedGamer = useLoaderData()
  const [sortGame, setSortGame] = useState(loadedGamer)

  const handleSort = (sortBy) => {
  if (sortBy === 'rating') {
    const sorted = [...loadedGamer].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    setSortGame(sorted);
  } 
  else if (sortBy === 'year') {
    const sorted = [...loadedGamer].sort((a, b) => Number(b.year) - Number(a.year));
    setSortGame(sorted);
  }
};


  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-5">All Game</h1>
      <div className="mb-5 flex gap-4 justify-end">
        <button onClick={()=>handleSort('rating')} className="btn btn-outline btn-accent btn-sm">Sort by rating</button>
        <button onClick={()=>handleSort('year')} className="btn btn-outline btn-accent btn-sm">Sort by year</button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {
          sortGame.map(game => <AllCard key={game._id} game={game}></AllCard>)
        }
      </div>
    </div>
  );
};

export default AllReviews;