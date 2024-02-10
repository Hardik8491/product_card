import React from "react";

const UserCard = (user) => {
  return (
    <div className="max-w-xl mx-auto p-1 rounded-3xl border   bg-white/40 shadow-md overflow-hidden">
      <div className="max-w-xl py-6 mx-auto px-8  bg-white/40  shadow-md rounded-3xlborder overflow-hidden">
        <div className="md:flex">
          {/* Left Side: User Image and Basic Details */}
          <div className="md:w-1/3 p-4 relative">
            <div className="absolute top-0 left-0 w-full h-full  opacity-50 rounded-lg"></div>
            <img
              src={user.userData.picture.large}
              alt="User"
              className="w-full h-auto object-center border rounded-lg"
            />
          </div>

          {/* Right Side: Profile Details */}
          <div className="md:w-2/3 p-4  bg-gradient-to-bl  from-indigo-200 ">
            <div className="">
              <p className="text-lg font-semibold text-gray-800">
                {user.userData.name.title} {user.userData.name.first}{" "}
                {user.userData.name.last}
              </p>

              <p className="text-gray-600 mt-2">{user.userData.email}</p>
              <p className="text-gray-600 mt-2">{user.userData.gender}</p>

              <p className="text-gray-600 mt-2">{user.userData.phone}</p>
              <p className="text-gray-600 mt-2">{user.userData.cell}</p>
            </div>
            <div>
              <p className="text-gray-600 mt-2">
                {user.userData.location.street.number}{" "}
                {user.userData.location.street.name}
              </p>

              <p className="text-gray-600">
                {user.userData.location.city}, {user.userData.location.state},{" "}
                {user.userData.location.country}
              </p>

              <p className="text-gray-600">{user.userData.location.postcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
