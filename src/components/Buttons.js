import React from 'react'

function Buttons({ handleChangeFilter, handleClickDeleteCompleted, filter }) {
  return (
    <div className='btns'>
      <button className={(filter === 'ALL') ? 'lightBtn todoBtn' : 'todoBtn'} onClick={() => handleChangeFilter('ALL')}>All</button>
      <button className={(filter === 'ACTIVE') ? 'lightBtn todoBtn' : 'todoBtn'} onClick={() => handleChangeFilter('ACTIVE')}>Active</button>
      <button className={(filter === 'COMPLETED') ? 'lightBtn todoBtn' : 'todoBtn'} onClick={() => handleChangeFilter('COMPLETED')}>Completed</button>
      <button className='todoBtn' onClick={handleClickDeleteCompleted}>Clear completed</button>
    </div>
  )
}

export default Buttons