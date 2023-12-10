import { Routes, Route } from "react-router-dom";
import IndexUsers from "./IndexUsers";
import ShowUser from "./ShowUser";

const RouterUser = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexUsers />} />
        <Route path="/:id" element={<ShowUser />} />
      </Routes>
    </>
  );
};
export default RouterUser;
