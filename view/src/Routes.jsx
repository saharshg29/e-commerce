import { Route, Routes } from "react-router-dom";
import Buyer from "./Components/Buyer";
const Paths = () => {
  return (
    <Routes>
      <Route element={<Buyer />} path="/buyer" />
    </Routes>
  );
};
export default Paths;
