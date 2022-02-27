import React from "react";
import BuyerNav from "../../Components/Navbar/Buyer";
export default function Buyer() {
  return (
    <>
      <div className="mb-2">
        <BuyerNav />
      </div>
      <div className="row ">
        <div className="col-md h-100 border-primary border">this is left</div>
        <div className="col-md-8 h-100 border-primary border">This is main</div>
        <div className="col-md h-100 border-primary border ">This is right</div>
      </div>
    </>
  );
}
