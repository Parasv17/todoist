
import "./App.css";
import Header from "./mycomp/Header";
import About from "./mycomp/About";
import Todos from "./mycomp/Todos";
import Footer from "./mycomp/Footer";
import ContactMe from "./mycomp/ContactMe";
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);

  const onAdd = (title, desc) => {
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno;
    }
    const addItem = {
      sno: sno,
      title: title,
      describe: desc,
    };
    setTodos([...todos, addItem]);
  };

  const onDelete = (item) => {
    setTodos(
      todos.filter((i) => {
        return i !== item;
      })
    );
    // localStorage.setItem("todos",JSON.stringify(todos))
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // localStorage.setItem("todos",JSON.stringify(todos))

  return (

    <React.Fragment>
      <Header/>
      {/* <Todos list={todos} onDelete={onDelete} onAdd={onAdd} /> */}
      <Routes>
        <Route path="/" element={<React.Fragment><Todos list={todos} onDelete={onDelete} onAdd={onAdd} />  <Footer /></React.Fragment> }/>
        <Route path="/about" element={<React.Fragment><About />  <Footer /></React.Fragment>} />
        <Route path="/contactMe" element={<React.Fragment><ContactMe />  <Footer /></React.Fragment>} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
