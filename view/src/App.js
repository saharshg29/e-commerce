import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import General from "./Screens/General/General";
import Buyer from "./Screens/Buyer/App";

function App() {
  return (
    <>
      {/* <div>
        
        <General />
       
      </div> */}


      <Buyer />
      <Footer />
    </>
  );
}

export default App;
