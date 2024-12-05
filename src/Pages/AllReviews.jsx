import { useLoaderData } from "react-router-dom";


const AllReviews = () => {
  const loadedGamer = useLoaderData()
  return (
    <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-10">Top Rated Game</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {
          loadedGamer.map(game=> <Card key={game._id} game={game}></Card>)
        }
      </div>
      </div>
  );
};

export default AllReviews;