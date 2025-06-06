import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddReview = () => {

  const { user } = useContext(AuthContext)

  const handelAddReview = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const year = e.target.year.value;
    const genres = e.target.genres.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;

    const newGamer = { photo, name, description, rating, year, genres, email, userName }

    console.log(newGamer)

    fetch('https://assignment-10-server-dusky.vercel.app/gamer', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGamer)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'success',
            text: 'Review added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }

      })
  }



  return (
    <div>

      <div className='lg:w-3/4 mx-auto mb-10'>
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Add Review!</h1>
          <p className="py-6">
            A game review page is a platform where users can explore detailed reviews and ratings of video games, helping them make informed decisions.
          </p>
        </div>
        <div className="card  w-full shrink-0 shadow-2xl bg-[#F4F3F0]">
          <form onSubmit={handelAddReview} className="card-body">
            {/* form first row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Game Cover Image/Thumbnail</span>
                </label>
                <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Game Title/ Name</span>
                </label>
                <input type="text" name='name' placeholder="Game name" className="input input-bordered" required />
              </div>
            </div>
            {/* form second row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Review Description</span>
                </label>
                <input type="text" name='description' placeholder=" A detailed review of the game" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Your Choos" className="input input-bordered" required />
              </div>
            </div>
            {/* form third row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Publishing year</span>
                </label>
                <input type="text" name='year' placeholder="Year" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Genres</span>
                </label>
                <select className="input input-bordered " name='genres' placeholder="Genres" id="day" required>
                  <option >Racing/Arcade</option>
                  <option >Action RPG</option>
                  <option >Simulation/RPG</option>
                  <option >First-Person Shooter</option>
                  <option >Adventure</option>
                  <option >Action RPG</option>
                </select>

              </div>
            </div>
            {/* form forth row */}
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' defaultValue={user.email} readOnly placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" name='userName' defaultValue={user.displayName} readOnly placeholder="Your Name" className="input input-bordered" required />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-success text-white">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;