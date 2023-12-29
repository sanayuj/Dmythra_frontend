import React, { useEffect, useState } from "react";
import { toogleBlock, userDetails } from "../../../Services/adminApi";
import "./Home.css";
function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const fetchUserDetails = async () => {
    const { data } = await userDetails();
    if (data.status) {
      setUserInfo(data.user);
    }
  };

  const toggleBlock = async (userId, index) => {
    const { data } = await toogleBlock(userId);
    setUserInfo((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, blockStatus: !user.blockStatus } : user
      )
    );
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div className="mainDiv">
      <h3 className="heading">User Lists</h3>
      <table className="table my-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Si.no</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((value, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{value.userName}</td>
              <td>{value.email}</td>
              <td>
                <button
                  className={
                    value?.blockStatus ? "btn btn-primary" : "btn btn-secondary"
                  }
                  onClick={() => toggleBlock(value._id, index)}
                >
                  {value?.blockStatus ? "Unblock" : "Block"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
