import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditPost = ({post}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading , setLoading] = useState(false)
      const [error , setError] = useState(null)
    const handleForm = (e) => {
         e.preventDefault()
         setLoading(true);
         fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
          method : 'PUT',
          body: JSON.stringify({
            title,
            body,
            userId: 1,
            id: post.id
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
         }).then(res => res.json())
         .then((data) => {
            setLoading(false)
            setError(null)
            Swal.fire({
              title: "Thanks!",
              text: "Post update successfully",
              icon: "success",
              confirmButtonText: "Ok",
          });
         }).catch(err => {
          setLoading(false)
          setError(err.message)
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "warning",
            confirmButtonText: "Ok",
        });
         })
    }
    useEffect(() => {
      setTitle(post.title)
      setBody(post.body)
    })
return (
    <div>
     <div className="container m-5">
        <div className="row">
          <div className="col-md-6">
      <h5>Edit Posts : </h5>
            
            <form className="mt-5" onSubmit={handleForm}>
              <div className="mb-3">
                <label className="form-label">Title :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <div className="form-text text-danger">
                  {title ? "" : "Title is requierd"}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Body :</label>
                <textarea
                  className="form-control"
                  placeholder="Body"
                  rows="6"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                ></textarea>
                <div className="form-text text-danger">
                  {body ? "" : "Body is requierd"}
                </div>
                <button
                  className="btn btn-dark mt-3"
                  disabled={title === "" || body === "" ? true : false}
                >
                 {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                  Edit

                </button>
                {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
)
}
export default EditPost;