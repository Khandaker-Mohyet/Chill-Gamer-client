import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";


const AllReviews = () => {
  const loadedGamer = useLoaderData()
  return (
    <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-10">All Game</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {
          loadedGamer.map(game=> <AllCard key={game._id} game={game}></AllCard>)
        }
      </div>
      </div>
  );
};

export default AllReviews;