import { useEffect, useState } from "react"
import ListPosts from '../../components/Posts/ListPosts'
import { Link } from "react-router-dom"
const Posts = () => {
    const [Posts,setPosts] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setLoading(false)
            setError(null)
        }).catch(err =>{
                setError(err.message)
                setLoading(false)
        })
    }, [])
return(
    <>
    <div className="container mt-5">
        <div className="row g-4">
        <h3>Posts Page</h3>
        <div>
        <Link to="/Posts/create" className="btn btn-dark">Create</Link>
        </div>

    {error && <h3>{error}</h3>}
    {loading && <div className="spinner-border"></div>}
    
    {Posts && <ListPosts Posts = {Posts}/>}
        </div>
    </div>

    </>
)
}
export default Posts