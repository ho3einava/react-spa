import { useState } from "react"
import Swal from "sweetalert2"

const DeletePost = ({id}) => {
    const [loading , setLoading] = useState(false)
      const [error , setError] = useState(null)
    const handleDelete = (e) => {
         e.preventDefault()
         setLoading(true);
         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
          method : 'DELETE',
          
         }).then(res => {
            setLoading(false)
            setError(null)
            Swal.fire({
              title: "Thanks!",
              text: `Post ${id} Delete successfully`,
              icon: "warning",
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
    return(
        <>
        <button className="btn btn-danger" onClick={handleDelete}>
            DELETE
            {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
            
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}

        </>
    )
}
export default DeletePost;