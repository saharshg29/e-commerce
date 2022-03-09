import React from "react";
import Cart1 from "./Cart1";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";
export default function Cart() {
  return (
    <>
      {console.log("Home renderrerd")}
      <div class="container">
        <div class="row">
          <div class="col">
            <Cart1 />
          </div>
          <div class="col">
            <Cart2 />
          </div>
          <div class="col">
            <Cart3 />
          </div>
        </div>
      </div>
    </>
  );
}