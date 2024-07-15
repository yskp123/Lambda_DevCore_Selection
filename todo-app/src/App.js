import './App.css';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddTodo = () => {
    if (isEditing) {
      let updatedTodos = [...allTodos];
      updatedTodos[currentIndex] = {
        title: newTitle,
        description: newDescription
      };
      setTodos(updatedTodos);
      localStorage.setItem('todolist', JSON.stringify(updatedTodos));
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      let newTodoItem = {
        title: newTitle,
        description: newDescription
      };
      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoItem);
      setTodos(updatedTodoArr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    }
    setNewTitle("");
    setNewDescription("");
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  const handleEditTodo = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setNewTitle(allTodos[index].title);
    setNewDescription(allTodos[index].description);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  return (
    <div className='App'>
      <h1>My To-do List</h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's the task title"
            />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What's the task description"
            />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>{isEditing ? 'Update' : 'Add'}</button>
          </div>
        </div>

        <div className='btn-area'>
          <button
            className={`secondaryBtn ${!isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className='todo-list'>
          {isCompleteScreen === false && allTodos.map((item, index) => (
            <div className='todo-list-item' key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <MdDelete
                  className="icon"
                  onClick={() => handleDeleteTodo(index)}
                  title="Delete?"
                />
                <MdEdit className="icon" onClick={() => handleEditTodo(index)} title="Edit?" />
                <BsCheckLg
                  className="check-icon"
                  onClick={() => handleComplete(index)}
                  title="Complete?"
                />
              </div>
            </div>
          ))}
          
          {isCompleteScreen === true && completedTodos.map((item, index) => (
            <div className='todo-list-item' key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><small>Completed on: {item.completedOn}</small></p>
              </div>
              <div>
                <MdDelete
                  className="icon"
                  onClick={() => handleDeleteCompletedTodo(index)}
                  title="Delete?"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
