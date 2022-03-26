import axios from "axios";
import React from "react";
import AddPerson from "./AddPerson";
import { useNavigate } from "react-router-dom";

const Home = ({ users, setCurrUser }) => {
  const usersList = Array.from(users);
  const route = useNavigate();

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/${id}`).then((res) => {
      console.log("deleted succesfully");
    });
  };

  const editUser = (user) => {
    route(`/edit/${user._id}`);
    setCurrUser({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
      hobby: user.hobby,
    });
  };

  return (
    <div>
      <div className="text-gray-900 lg:flex">
        <div className="px-3 py-4 justify-center">
          <h1 className="text-3xl mt-6 ml-12 mb-12">Persons</h1>
          <table className="text-md bg-[#1c2731] w-20 shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b text-white">
                <th className="text-left text-sm uppercase font-semibold p-3 px-5"></th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  First name
                </th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  Last name
                </th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  Email
                </th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  Phone
                </th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  Location
                </th>
                <th className="text-left text-sm uppercase font-semibold p-3 px-5">
                  Hobby
                </th>
                <th></th>
              </tr>
              {usersList.map((user, i) => {
                return (
                  <tr
                    key={user._id}
                    className="border-b transition duration-300 ease-in-out hover:bg-gray-200 bg-gray-100"
                  >
                    <td className="p-3 px-5">{++i}</td>
                    <td className="p-3 px-5">{user.firstName}</td>
                    <td className="p-3 px-5">{user.lastName}</td>
                    <td className="p-3 px-5">{user.email}</td>
                    <td className="p-3 px-5">{user.phone}</td>
                    <td className="p-3 px-5">{user.location}</td>
                    <td className="p-3 px-5">{user.hobby}</td>
                    <td className="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          editUser(user);
                        }}
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 mt-24 justify-between">
          <AddPerson />
        </div>
      </div>
    </div>
  );
};

export default Home;
