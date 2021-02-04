import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Buttons from "./components/Buttons";
import TodoItem from "./components/TodoItem";
import { getAll } from "./ApiService";
import { sendRequest } from "./ApiService";
import { postTodo } from "./ApiService";


function App() {
  // Для инпута
  const [value, setValue] = useState("");
  // отображаемые записи и хук для них
  const [todos, setTodos] = useState([]);
  // Фокусировка на инпуте
  const inputRef = useRef();
  // Подсветка активной кнопки
  const [filter, setFilter] = useState("ALL");
  // записи и хук для них
  const [todosStorage, setTodosStorage] = useState([]);

  // при рендере и обновлении основных записей => перезаписать отображаемые записи
  useEffect(() => {
    setTodos(todosStorage);
  }, [todosStorage]);

  useEffect(() => {
    getAll().then((result) => {
      setTodosStorage(result);
    });
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  });

  // получить id, пройтись по записям и если id совпадает, то изменить состояние(isDone), иначе - просто вернуть элемент
  const handleDoneTodo = (_id) => {
    sendRequest(
      `/${_id}/done`,
      "put"
    ).then(() => {
      getAll().then((result) => {
        setTodosStorage(result);
      });
    });
  };

  // Редактировать запись по двойному клику
  const handleEditTodo = (_id, valueChange) => {
    postTodo(
      `/${_id}/title`,
      { title: valueChange },
      "put"
    ).then(() => {
      getAll().then((result) => {
        setTodosStorage(result);
      });
    })
   
  };

  const handleChangeFilter = (buttonFilter) => {
    setFilter(buttonFilter);

    const filteredTodos = todosStorage.filter((todo) => {
      if (buttonFilter === "ACTIVE") {
        return !todo.isDone;
      }

      if (buttonFilter === "COMPLETED") {
        return todo.isDone;
      }

      return todo;
    });

    setTodos(filteredTodos);
  };

  // получить id, фильтр по записям = удаление по совпадению id
  const handleDeleteTodo = (_id) => {
    setTodosStorage(todosStorage.filter((todo) => todo._id !== _id));
    sendRequest(
      `/${_id}`,
      "delete"
    );
  };

  // Удалить все выполненные
  const handleClickDeleteCompleted = () => {
    setTodosStorage(todosStorage.filter((todo) => !todo.isDone));
    sendRequest(
      `/clear-done`,
      "delete"
    );
  };

  return (
    <div className="todo-list">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (value) {
            postTodo(
              "",
              { title: value },
              "post"
            ).then(() => {
              getAll().then((result) => {
                setTodosStorage(result);
              });
              setValue("");
            });
          }
        }}
      >
        <input
          placeholder="What needs to be done?"
          className="writeTask"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          ref={inputRef}
        />
      </form>

      {/* если есть задачи, то пройтись по ним с помощью map и вывести через функцию проверки на чек */}
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            handleDoneTodo={handleDoneTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}

      <Buttons
        handleChangeFilter={handleChangeFilter}
        handleClickDeleteCompleted={handleClickDeleteCompleted}
        filter={filter}
      />
    </div>
  );
}

export default App;