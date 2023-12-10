import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import DeletePost from "../../components/Posts/DeletePost";
const ShowPost = () => {
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
      });
  }, [id]);
  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          <h3>Posts id number : {id}</h3>
          {error && <h3>{error}</h3>}
          {loading && <div className="spinner-border"></div>}

          {post && <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    {post.title}
                </div>
                <ul className="list-group list-group-flush">
                    
                    <li className="list-group-item"> {post.body}</li>
                    <li className="list-group-item">
                      <DeletePost id={id}/>
                      <Link to={`/Posts/edit/${id}`} className="btn btn-warning ms-4">Edit</Link>
                       </li>
                    
                    
                </ul>
            </div>
            </div>}
        </div>
      </div>
    </>
  );
};
export default ShowPost;
