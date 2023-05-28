import React, { useState } from "react";
import "./EditTodo.css";
const EditTodo = (props) => {
  // состояние для отредактированного таска в качестве начального состояние указали объект  c данными для редактирования
  const [item, setItem] = useState(props.editTodo);

  // функция для синхронизации данных из инпута и состояния item(то , что находится под ключом task)
  const handleEditInput = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    newObj.firstName = e.target.value;
    setItem(newObj);
  };
  const handleEditInput1 = (e) => {
    let newObj = { ...item };
    newObj.lastName = e.target.value;
    setItem(newObj);
  };
  const handleEditInput2 = (e) => {
    let newObj = { ...item };
    newObj.phone = e.target.value;
    setItem(newObj);
  };
  const handleEditInput3 = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    // под ключом task в newObj помещаем данные ищ инпута
    newObj.email = e.target.value;
    setItem(newObj);
  };

  console.log(item);

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input onChange={handleEditInput} type="text" value={item.firstName} />
        <input onChange={handleEditInput1} type="text" value={item.lastName} />
        <input onChange={handleEditInput2} type="text" value={item.phone} />
        <input onChange={handleEditInput3} type="text" value={item.email} />
        <button onClick={() => props.handleSaveTask(item)}>Сохранить</button>
      </div>
    </div>
  );
};

export default EditTodo;
