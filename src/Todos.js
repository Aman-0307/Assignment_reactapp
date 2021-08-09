import React, { Fragment, useState } from "react";

const Todos = ({ todosProps }) => {
  const [todos, setTodos] = useState(todosProps);
  const [newTitle, setNewTitle] = useState();

  const handleDelete = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  const handleAdd = () => {
    let newTodo = {
      id: 999,
      title: newTitle,
      completed: false
    };
    console.log([...todos, newTodo]);
    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <Fragment>
      <div >
        <form onSubmit={handleAdd}>
          <div className="taskinput">
          <input type="text" onChange={(e) => setNewTitle(e.target.value)} />
          </div>
          
          <div className="taskbutton">
            <button type="submit">Add Task</button>
          </div>
          
        </form>
        <h1 className="title">Hello CodeSandbox</h1>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <p>
                {todo.id} {todo.title}
              </p>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
      </div>
    </Fragment>
  );
};
export default Todos;
