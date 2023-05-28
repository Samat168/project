import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/EditTodo/EditTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  // функция для обновления состояния todos
  const handleTask = (newObj) => {
    // копируем все что было в состоянии todos
    let newTodos = [...todos];
    // добавили новый таск в newTodos
    newTodos.push(newObj);
    // обновили состояние
    setTodos(newTodos);
  };

  function changeStatus(id) {
    //перебираем массив todos и если у какого элемента id совпадает с тем id который был передан при вызове данной функции  то меняем его status на противоположный
    const newTodos = todos.map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  }

  //функция которая срабатывает при нажатии на кнопку edit
  const handleEdit = (taskToEdit) => {
    setModal(true);
    setEditTodo(taskToEdit);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  // функция для сохранения отредактированного таска
  const handleSaveTask = (updatedTask) => {
    // перебираем todos, и в случае если id какого то item совпадет с  id updatedTak то внтури map  мы возвращаем updatedTask вместо item  а в  остал-ых в случаях воз-ем item без изменений
    const newTodos = todos.map((item) => {
      if (item.id == updatedTask.id) {
        return updatedTask;
      }
      return item;
    });
    setTodos(newTodos);
    handleCloseModal();
  };

  // функцмя для удаления
  const handleDelete = (id) => {
    // фильтруем todos , возвращая все элементы  у которых id не совпадает с тем id который передали при вызове
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todos={todos}
        changeStatus={changeStatus}
      />

      {modal ? (
        <EditTodo
          handleSaveTask={handleSaveTask}
          editTodo={editTodo}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};

export default App;
