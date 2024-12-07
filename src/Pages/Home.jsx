import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ExtraSection from "../Components/extraSection";
import Card from "../Components/Card";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  const loadedGamer = useLoaderData()

  const cursorStyle = "|";


  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold ">Top Rated Game</h1>
        <Typewriter
          words={['Explore your favorate game']} 
          loop={100} 
          cursor
          cursorStyle={cursorStyle}
          typeSpeed={70} 
          deleteSpeed={50} 
          delaySpeed={1000} 
        />
        </div>
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