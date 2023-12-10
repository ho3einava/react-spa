import { Link } from "react-router-dom";

const ListPosts = ({ Posts }) => {
    
  return (
    <>
    {Posts.map(post => (
        <div className="col-md-4" key={post.id}>
            <div className="card">
                <div className="card-header fw-bold">
                    <Link to={`${post.id}`} >{post.title}</Link>
                </div>
                <ul className="list-group list-group-flush">
                    
                    <li className="list-group-item">  {post.body}</li>
                    
                </ul>
            </div>
        </div>
    ))}
</>
  );
};
export default ListPosts;
