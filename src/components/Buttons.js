import React from 'react'

function Buttons({ handleChangeFilter, handleClickDeleteCompleted, filter }) {
  return (
    <div className='btns'>
      <button className={(filter === 'ALL') ? 'lightBtn' : ''} onClick={() => handleChangeFilter('ALL')}>All</button>
      <button className={(filter === 'ACTIVE') ? 'lightBtn' : ''} onClick={() => handleChangeFilter('ACTIVE')}>Active</button>
      <button className={(filter === 'COMPLETED') ? 'lightBtn' : ''} onClick={() => handleChangeFilter('COMPLETED')}>Completed</button>
      <button onClick={handleClickDeleteCompleted}>Clear completed</button>
    </div>
  )
}

export default Buttons