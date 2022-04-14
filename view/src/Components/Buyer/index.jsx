import "./index.scss";
import Right from "./Right";
import Nav from "./Navbar";
import Left from "./Left";

const Buyer = () => {
  return (
    <>
      <Nav></Nav>
      <div className="parent row container">
        <div className="col border-top border-left border-bottom border border-1 border-primary">
          <Left></Left>
        </div>
        <div className="Content col-8 border-top border-bottom border border-1 border-primary p-1">
          This is main content
        </div>
        <div className="border-top border-left border-bottom border border-1 border-primary col">
          <Right></Right>
        </div>
      </div>
    </>
  );
};

export default Buyer;
