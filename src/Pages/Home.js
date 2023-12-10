import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container m-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Home Page - React Project</h3>
            
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/Users" className="btn btn-dark">Users</Link>
            <Link to="/Posts" className="btn btn-light ms-3">Posts</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
