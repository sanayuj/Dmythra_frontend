import { useEffect ,useState} from "react"
import { userPostDetails } from "../../../Services/adminApi";
import { useNavigate } from "react-router-dom";
function PostDisplay() {
  const navigate=useNavigate()
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
   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h5 className='m-4'>User Posts</h5>
  <button className="btn btn-primary m-4" onClick={() => navigate("/addPost")}>Add Post</button>
</div>
    <div className="d-flex flex-wrap justify-content-center">

      {postData.length>0 ? postData?.map((value, index) => (
        <div key={index} className="card m-4" style={{ width: "12rem" }}>
          <img src={`http://localhost:4000/images/${value.imageUrl}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <p>{value.postCaption}</p>
            <p className="card-text">Author: {value.ownerId.userName}</p>
          </div>
        </div>
      )):"No post "}
    </div>
    </div>
  );
}

export default PostDisplay;
