import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const MyReviews = () => {
  const reviews = useLoaderData()
  const { user } = useContext(AuthContext)
  
  
  const [filterData, setFilterData] = useState(
    reviews.filter((review) => review.email === user?.email)
  );

  const handelUserDelete = (id) =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`http://localhost:4000/gamer/${id}`, {
      method:'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
          const remaining = filterData.filter(use => use._id !== id);
          setFilterData(remaining)
        }
    })
  }
});
  }
  return (
    <div>
      <div className="overflow-x-auto w-8/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Genres</th>
        <th>Rating</th>
        <th>Auction</th>
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
            <td className="space-x-3">
              <Link to={`/update/${data._id}`}><button className="btn btn-warning btn-sm">update</button></Link>
              <button
                onClick={()=>handelUserDelete(data._id)}
                className="btn btn-error btn-sm">Delate</button>
            </td>
      </tr>)    
      }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyReviews;