import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
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
          <h3>Users id number : {id}</h3>
          {error && <h3>{error}</h3>}
          {loading && <div className="spinner-border"></div>}

          {user && <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    {user.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">userName : {user.username}</li>
                    <li className="list-group-item">Email : {user.email}</li>
                    <li className="list-group-item">Phone : {user.phone}</li>
                    <li className="list-group-item">address : {user.address.street}</li>
                </ul>
            </div>
            </div>}
        </div>
      </div>
    </>
  );
};
export default ShowUser;
