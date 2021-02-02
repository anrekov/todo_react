import React from 'react';

function TodoItem({ todo, handleDoneTodo, handleDeleteTodo, handleEditTodo }) {
  // при нажатии передавать id и обрабатывать его для чека
  const handleClick = () => {
    handleDoneTodo(todo.id)
  }
  // при нажатии передавать id и обрабатывать его для удаления
  const handleDeleteOne = () => {
    handleDeleteTodo(todo.id)
  }
  const handleEditOne = () => {
    handleEditTodo(todo.id)
  }

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={todo.isDone} onChange={handleClick} />

      <span onDoubleClick={handleEditOne} onClick={handleClick} style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.text}</span>

      <span onClick={handleDeleteOne} className='close'>{'\u00D7'}</span>
    </div>
  )
}

export default TodoItem;