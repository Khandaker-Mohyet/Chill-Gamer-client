import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { InfinitySpin } from "react-loader-spinner";


const MainLayout = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Navbar></Navbar>
        {
        navigation.state === 'loading' ?
          <div className="w-1/12 mx-auto">
            <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
            
            />  
          </div> :
          <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;