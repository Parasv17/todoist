import React from "react";
import "../index.css"
export default function Todo({ details, onDelete }) {
  return (
    // <div>
    //     <h4>{details.title}</h4>
    //     <p>{details.describe}</p>
    //     <button className="btn btn-success btn-sm" onClick={()=>{onDelete(details)}}>Done</button>
    // </div>
    <div
      className="elements card text-white border-light"
      style={{background:"#202C39" }}>
      <h5 className="card-header">{details.title}</h5>
      <div className=" card-body">
        <p className="todocont card-text mb-5">{details.describe}</p>
        <button
          className="btn btn-danger btn-sm  "
          style={{ position: "absolute", bottom: "10px" }}
          onClick={() => {
            onDelete(details);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
