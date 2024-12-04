import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ExtraSection from "../Components/extraSection";
import Card from "../Components/Card";


const Home = () => {
  const loadedGamer = useLoaderData()


  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-10">Top Rated Game</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {
          loadedGamer.map(game=> <Card key={game._id} game={game}></Card>)
        }
      </div>
      </div>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;