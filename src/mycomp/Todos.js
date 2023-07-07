import React, { useState } from "react";
// import { useState } from "react";
import Todo from "./Todo";
import "../index.css"

export default function Todos(props) {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const onSubmit = (Title, Desc) => {
    if (!Title || !Desc) {
      alert("Cannot Add a new To-Do without a Title or Description")
    }
    else {
      props.onAdd(Title, Desc)
      setTitle("")
      setDesc("")
    }
  }



  return (
    <React.Fragment>
      <h2 className="topper text-center mb-2">To-Do List</h2>
      <div className="container" >
        {/* <div className="" style={{ margin: "auto", justifyContent: "center", justifyItems: "center" }}> */}

        <div
          className="elements card border-light text-white "
        >

          <h5 className="card-header">Add New Todo</h5>

          <div className="card-body">

            <div className=" form-control-sm mb-3" >
              <input type="text" value={Title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="floatingInput" placeholder="Title" />
              {/* <label for="floatingInput">Title</label> */}
            </div>

            <textarea className="form-control mb-5 " value={Desc} onChange={(e) => { setDesc(e.target.value) }} id="Textarea1" rows="5" placeholder="Description"></textarea>
            {/* <label for="floatingPassword">Description</label> */}


            <button
              className="btn btn-success btn-sm ml-1 "
              style={{ position: "absolute", bottom: "10px", marginTop: "5px" }} onClick={() => { onSubmit(Title, Desc) }}>
              Add
            </button>
          </div>
        </div>

        {props.list.length === 0
          ? <div className="elements">   "No pending Tasks"</div>
          : props.list.map((item) => {
            return (
              <Todo details={item} key={item.sno} onDelete={props.onDelete} />
            );
          })}
      </div>

    </React.Fragment>
  );
}
