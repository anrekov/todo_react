import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import Buttons from './components/Buttons'
import TodoItem from './components/TodoItem'
import { v4 as uuidv4 } from 'uuid';


function App() {
  // записи и хук для них
  const [todosStorage, setTodosStorage] = useState([
    {
      id: uuidv4(),
      text: 'First todo',
      isDone: false
    },
    {
      id: uuidv4(),
      text: 'Second todo',
      isDone: false
    },
    {
      id: uuidv4(),
      text: 'Third todo',
      isDone: true
    }
  ]);

  // отображаемые записи и хук для них
  const [todos, setTodos] = useState([]);

  // при рендере и обновлении основных записей => перезаписать отображаемые записи
  useEffect(() => {
    setTodos(todosStorage)
  }, [todosStorage])

  useEffect(() => {
    inputRef.current.focus();
  })

  // получить id, пройтись по записям и если id совпадает, то изменить состояние(isDone), иначе - просто вернуть элемент
  const handleDoneTodo = (id) => {
    setTodosStorage(todosStorage.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone
        }
      } else {
        return item
      }
    }))
  }

  // Фокусировка на инпуте
  const inputRef = useRef();

  // Подсветка активной кнопки
  const [filter, setFilter] = useState('ALL')

  // Редактировать запись по двойному клику
  const handleEditTodo = (id) => {
    setTodosStorage(todosStorage.filter(todo => todo.id !== id))
    const forInputValule = todosStorage.filter(todo => todo.id === id)[0].text;
    setValue(forInputValule);
  }

  // получить id, фильтр по записям = удаление по совпадению id
  const handleDeleteTodo = (id) => {
    setTodosStorage(todosStorage.filter(todo => todo.id !== id))
  }

  // Показать активные
  const handleClickActive = () => {
    setTodos(todosStorage.filter(todo => todo.isDone !== true));
    setFilter('ACTIVE');
  }

  // Показать завершеннные
  const handleClickCompleted = () => {
    setTodos(todosStorage.filter(todo => todo.isDone === true));
    setFilter('COMPLETED');
  }

  // Показать все
  const handleClickAll = () => {
    setTodos(todosStorage);
    setFilter('ALL');
  }

  // Удалить все выполненные
  const handleClickDeleteCompleted = () => {
    setTodosStorage(todosStorage.filter(todo => todo.isDone !== true));
    setFilter('CLEARCOMPLETED');
    setTimeout(() => {
      setFilter('ALL');
    }, 250);
  }

  // Для инпута
  const [value, setValue] = useState('');

  return (
    <div className='todo-list'>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value) {
            setTodosStorage([{ id: uuidv4(), text: value, isDone: false }, ...todosStorage]);
            setValue('');
          }
        }}>
        <input
          placeholder='What needs to be done?'
          id='writeTask'
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          ref={inputRef}
        />
      </form>

      {/* если есть задачи, то пройтись по ним с помощью map и вывести через функцию проверки на чек */}
      {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDoneTodo={handleDoneTodo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />)}

      <Buttons handleClickActive={handleClickActive} handleClickCompleted={handleClickCompleted} handleClickAll={handleClickAll} handleClickDeleteCompleted={handleClickDeleteCompleted} filter={filter} /> 
    </div>
  )
}

export default App