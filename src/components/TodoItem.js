import React, { useState } from 'react';

const TodoItem = ({ todo, handleDoneTodo, handleDeleteTodo, handleEditTodo }) => {
  const [hideValue, setHideValue] = useState(false);
  const [value, setValue] = useState('');

  // при нажатии передавать id и обрабатывать его для чека
  const handleClick = () => {
    handleDoneTodo(todo._id);
  };
  // при нажатии передавать id и обрабатывать его для удаления
  const handleDeleteOne = () => {
    handleDeleteTodo(todo._id);
  };
  const handleEditOne = () => {
    setHideValue(true);
  };
  const handleChangeTodo = () => {
    handleEditTodo(todo._id, value);
    setHideValue(false);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.isDone} onChange={handleClick} />

      <span
        onDoubleClick={handleEditOne}
        onClick={handleClick}
        style={{
          textDecoration: todo.isDone ? 'line-through' : 'none',
          display: hideValue ? 'none' : 'block',
        }}
      >
        {todo.title}
      </span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleChangeTodo();
        }}
      >
        <input
          onBlur={handleChangeTodo}
          type={hideValue ? 'none' : 'hidden'}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          defaultValue={todo.title}
        />
      </form>

      <span onClick={handleDeleteOne} className="close">
        {'\u00D7'}
      </span>
    </div>
  );
}

export default TodoItem;
