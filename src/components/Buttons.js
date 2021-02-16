import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({
  handleChangeFilter,
  handleClickDeleteCompleted,
  filter,
}) => {
  const handleClickInOut = () => {
    localStorage.setItem('token', '');
  };
  return (
    <div className="btns">
      <button className="todoBtn loginBtn" onClick={handleClickInOut}>
        <Link to="/login">
          Sign Out
        </Link>
      </button>
      <button
        className={filter === 'ALL' ? 'lightBtn todoBtn' : 'todoBtn'}
        onClick={() => handleChangeFilter('ALL')}
      >
        All
      </button>
      <button
        className={filter === 'ACTIVE' ? 'lightBtn todoBtn' : 'todoBtn'}
        onClick={() => handleChangeFilter('ACTIVE')}
      >
        Active
      </button>
      <button
        className={filter === 'COMPLETED' ? 'lightBtn todoBtn' : 'todoBtn'}
        onClick={() => handleChangeFilter('COMPLETED')}
      >
        Completed
      </button>
      <button className="todoBtn" onClick={handleClickDeleteCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default Buttons;
