import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({ currUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    phone: currUser.phone,
    location: currUser.location,
    hobby: currUser.hobby,
    id: currUser.id,
  });

  const editUser = (user) => {
    console.log(user.id);
    axios.put(`http://localhost:5000/edit/${user.id}`, user);
  };

  return (
    <div className="px-8 mx-24 my-24 py-6 text-left bg-white shadow-lg md:min-w-fit lg:w-[22rem] sm:w-fit">
      <h3 className="text-2xl font-bold text-center">Edit User</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editUser(user);
          navigate("/");
        }}
        action=""
      >
        <div className="mt-4 text-center">
          <div className="flex">
            <input
              required
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              type="text"
              defaultValue={currUser.firstName}
              className="w-full mr-8 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              required
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              type="text"
              defaultValue={currUser.lastName}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex mt-5">
            <input
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              defaultValue={currUser.email}
              className="w-full px-4 py-2 mr-8 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              required
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              type="text"
              defaultValue={currUser.phone}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex mt-5">
            <input
              onChange={(e) => setUser({ ...user, location: e.target.value })}
              type="text"
              defaultValue={currUser.location}
              className="w-full px-4 py-2 mr-8 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              onChange={(e) => setUser({ ...user, hobby: e.target.value })}
              type="text"
              defaultValue={currUser.hobby}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="inline-block m-auto mt-6 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Edit User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
