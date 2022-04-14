import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import General from "./Screens/General/General";
import Paths from "./Routes";
function App() {
  return (
    <>
      <div>

        {/* <General /> */}
        <Paths />
      </div>

      <Footer />
    </>
  );
}

export default App;
