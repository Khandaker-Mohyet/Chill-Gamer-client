import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const GameWatchList = () => {
  const watchList = useLoaderData()
  const { user } = useContext(AuthContext)

  const [filterData] = useState(watchList.filter(list=> list.mail === user.email))

  


  console.log(name)
  return (
    <div className="mb-80">
      <div className="overflow-x-auto w-8/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Genres</th>
        <th>Rating</th>
        {/* <th>Auction</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
          filterData.map((data,idx)=><tr key={data._id}>
            <th>{idx+1}</th>
            <td>{data.name}</td>
            <td>{data.genres}</td>
            <td>{data.rating}</td>
            {/* <td className="space-x-3">
              <Link to={`/update/${data._id}`}><button className="btn btn-warning btn-sm">update</button></Link>
              <button
                onClick={()=>handelUserDelete(data._id)}
                className="btn btn-error btn-sm">Delate</button>
            </td> */}
      </tr>)    
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default GameWatchList;