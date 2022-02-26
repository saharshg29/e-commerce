import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="sticky-top border mb-2">Top Bar</div>
      <div className="row border">
        <div className="col-md  border  ">Left bar </div>
        <div className="col-md-8 border">Main bar </div>
        <div className="col-md  border ">Right bar </div>
      </div>
      <div className="sticky-bottom border mt-2">Footer </div>
    </>
  );
}

export default App;
