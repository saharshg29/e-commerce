import { Route, Routes } from "react-router-dom";
import Buyer from "./Components/Buyer";
import General from "./Screens/General/General";
import SignIn from "./Components/SignIn/Signin";
import SignUp from "./Components/SignUp/SignUp";
const Paths = () => {
  return (
    <Routes>
      <Route element={<Buyer />} path="/buyer" />
      <Route element={<General />} path="/" />
      <Route element={<SignIn />} path="/signin" />
      <Route element={<SignUp />} path="/sign-up" />
    </Routes>
  );
};
export default Paths;
