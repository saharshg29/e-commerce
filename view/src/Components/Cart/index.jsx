import React from "react";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
export default function Home() {
  return (
    <>
      {console.log("Home renderrerd")}
      <div class="container">
        <div class="row">
          <div class="col">
            <Col1 />
          </div>
          <div class="col">
            <Col2 />
          </div>
          <div class="col">
            <Col3 />
          </div>
        </div>
      </div>
    </>
  );
}
