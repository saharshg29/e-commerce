import React from "react";
import { useDispatch } from "react-redux";
import { Add } from "../action/Actions";
import { initialState } from "../constants";
let Card = initialState.Data;
let column2 = [];

for (let i = 1; i < Card.length; i += 3) {
  column2.push(Card[i]);
}

export default function Col2() {
  const dispatch = useDispatch();
  return (
    <>
      {column2.map((item) => {
        return (
          <>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.thumbnailUrl}
                  className="card-img-top"
                  alt="something"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <p className="card-text">{item.title}</p>
                  <span
                    onClick={() => {
                      dispatch(Add(item));
                    }}
                    className="btn btn-info"
                  >
                    Click Me
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
