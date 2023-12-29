import React, { useEffect, useState } from "react";
import "./UserPost.css";
import { userPostDetails } from "../../../Services/adminApi";
function UserPost() {
  const [postData, setPostData] = useState([]);
  const fetchUsersPost = async () => {
    const { data } = await userPostDetails();
    if (data.status) {
      console.log(data);
      setPostData(data.data);
    }
  };
  useEffect(() => {
    fetchUsersPost();
  }, []);
  return (
    <div className="donationMain">
      <h4>User's Post</h4>
      {postData.map((value) => (
        <div className="mainList">
          <div className="PostlistView">
            <h4>{value.postCaption}</h4>
            <h6 className="my-4">{}</h6>
            <p>
              Owner : <span>{value.ownerId.userName}</span>
            </p>
          </div>
          <img
            className="imageDiv"
            src={`http://localhost:4000/images/${value.imageUrl}`}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default UserPost;
