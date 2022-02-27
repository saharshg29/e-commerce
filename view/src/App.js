import "./App.css";
import Buyer from "./Components/SignUp/Buyer";
import Normal from "./Components/Navbar/Normal";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Normal></Normal>
        <Buyer></Buyer>
        <Footer />
      </div>
    </>
  );
}

export default App;
