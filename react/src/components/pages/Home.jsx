import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import About from "./About";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import EditTodo from "../EditTodo";

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null)

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...newTodo }]);
  }


  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    navigate('/edit', { replace: true }); // Use the navigate function to go to the edit page
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    );
    setCurrentTodo(null);
  };

  const handleCancelEdit = () => {
    setCurrentTodo(null);
  };


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={
          <div className="container">
            <h1>Todo App</h1>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList
              todos={todos}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
            />
          </div>
        } />
        <Route path="/edit"
          element={<EditTodo currentTodo={currentTodo} onUpdate={handleUpdateTodo} onCancel={handleCancelEdit} />} />
      </Routes>
    </div>
  )
}
export default Home;