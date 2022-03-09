import React from "react";
import { useSelector } from "react-redux";

export default function Cart3() {
  const selected = useSelector((store) => store.todo.selected);
  let column1 = [];
  for (let i = 2; i < selected.length; i += 3) {
    column1.push(selected[i]);
  }
  return (
    <>
      {column1.map((item) => {
        return (
          <>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.thumbnailUrl}
                  className="card-img-top"
                  alt="thu"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <p className="card-text">{item.title}</p>
                  <span className="btn btn-primary">Go somewhere</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
