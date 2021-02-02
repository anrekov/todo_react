import React from 'react'

function Buttons({ handleClickActive, handleClickCompleted, handleClickAll, handleClickDeleteCompleted, filter }) {
  return (
    <div className='btns'>
      <button className={(filter === 'ALL') ? 'lightBtn' : ''} onClick={handleClickAll}>All</button>
      <button className={(filter === 'ACTIVE') ? 'lightBtn' : ''} onClick={handleClickActive}>Active</button>
      <button className={(filter === 'COMPLETED') ? 'lightBtn' : ''} onClick={handleClickCompleted}>Completed</button>
      <button className={(filter === 'CLEARCOMPLETED') ? 'lightBtn' : ''} onClick={handleClickDeleteCompleted}>Clear completed</button>
    </div>
  )
}

export default Buttons