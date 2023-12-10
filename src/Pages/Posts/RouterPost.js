import { Routes, Route } from "react-router-dom";
import IndexPosts from "./IndexPosts";
import ShowPost from "./ShowPost";
import Create from "./Create";
import Edit from "./Edit";

const RouterUser = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPosts />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/:id" element={<ShowPost />} />
      </Routes>
    </>
  );
};
export default RouterUser;
