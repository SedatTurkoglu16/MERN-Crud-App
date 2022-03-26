import React, { useState } from "react";
import { createUser } from "../axios/index";

const AddPerson = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    hobby: "",
  });

  return (
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg md:min-w-fit lg:w-[22rem] sm:w-fit">
      <h3 className="text-2xl font-bold text-center">Add Person</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.reload(false);
          createUser(user)
            .then((res) => {
              setUser(res.config.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        action=""
      >
        <div className="mt-4 text-center">
          <div className="flex">
            <input
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
              type="text"
              required
              placeholder="First Name"
              className="w-full mr-8 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
              type="text"
              required
              placeholder="Last Name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex mt-5">
            <input
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 mr-8 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
              type="text"
              required
              placeholder="Phone"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex mt-5">
            <input
              onChange={(e) => {
                setUser({ ...user, location: e.target.value });
              }}
              type="text"
              placeholder="Location"
              className="w-full px-4 py-2 mr-8 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              onChange={(e) => {
                setUser({ ...user, hobby: e.target.value });
              }}
              type="text"
              placeholder="Hobby"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="inline-block m-auto mt-6 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add Person
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
