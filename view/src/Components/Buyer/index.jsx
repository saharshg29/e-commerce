import "./index.scss";
import Right from "./Right";
import Nav from "./Navbar";

const Buyer = () => {
  return (
    <>
      <Nav></Nav>
      <div className="parent row">
        <div className="col-2"></div>
        <div className="  col-8 border-primary border-2 rounded border">
          <div className="Content bg-dark text-light ">
            This is main content
          </div>
        </div>

        <div className="Right col-2">
          <Right></Right>
        </div>
      </div>
    </>
  );
};

export default Buyer;
