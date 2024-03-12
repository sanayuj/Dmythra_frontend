import { useEffect ,useState} from "react"
import { userPostDetails } from "../../../Services/adminApi";
function PostDisplay() {
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
    <div>
    <h5 className='m-4'>User Posts</h5>
    <div className="d-flex flex-wrap justify-content-center">
      {postData.map((value, index) => (
        <div key={index} className="card m-4" style={{ width: "12rem" }}>
          <img src={`http://localhost:4000/images/${value.imageUrl}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <p>{value.postCaption}</p>
            <p className="card-text">Author: {value.ownerId.userName}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default PostDisplay;
