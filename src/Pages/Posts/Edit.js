
import { useEffect, useState } from "react";
import EditPost from "../../components/Posts/EditPost";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const Edit = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
          setError(null);
         
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
          Swal.fire({
            title: "Warning",
            text: err.message,
            icon: "warning",
            confirmButtonText : "Ok"
          });
        });
    }, [id]);
         
return(
    <>
    <div className="col-md-6 ms-5">
    
     {error && <h3>{error}</h3>}
    {loading && <div className="spinner-border"></div>}
    {post && <EditPost  post={post} />}
       
    </div>

     
    </>
)
}

export default Edit;