import React, { useState, useEffect } from "react";

import { fetchDataFromApi } from "./utils/api";
import UserCard from "./components/User/UserCard";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setUserData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center  bg-gradient-to-bl  from-indigo-500">
      <div className="w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="">
            {userData.map((user) => (
              <UserCard key={user.login.uuid} userData={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
