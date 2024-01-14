// Todos.jsx
import React, { useState, useEffect } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/show-todo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTodos(data.todo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>Title:</strong> {todo.title}, <strong>Description:</strong> {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
