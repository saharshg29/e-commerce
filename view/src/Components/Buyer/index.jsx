import "./index.scss";
import Right from "./Right";
import Nav from "./Navbar";

const Buyer = () => {
  return (
    <>
      <Nav></Nav>
      <div className="parent row">
        <div className="col-2"></div>
        <div className="Content col-8 bg-dark text-light border-primary border-2 rounded border">
          This is main content
        </div>
        <div className="Right col-2">
          <Right></Right>
        </div>
      </div>
    </>
  );
};

export default Buyer;
