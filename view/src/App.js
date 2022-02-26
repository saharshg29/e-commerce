import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buyer from "./Component/Signup/Buyer";
import Normal from "./Component/Navbar/Normal";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="row">
        <div className="sticky-top border mb-2">
          <Normal></Normal>
        </div>
        <div className="row">
          <div className="col-md-2">Left</div>
          <div className="col-md-8">
            <Buyer></Buyer>
          </div>
          <div className="col-md-2">Right</div>
        </div>
        <div className="sticky-bottom border mt-2">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
