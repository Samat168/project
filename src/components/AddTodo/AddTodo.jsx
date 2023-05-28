import React, { useState } from "react";
import "./AddTodo.css";
const AddTodo = (props) => {
  // состояние для того чтобы хранить данные таска который хотим добавить
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // функция для синхронизации данных инпута и стейта task
  function handleInput(e) {
    setFirstName(e.target.value);
  }
  function handleInput1(e) {
    setLastName(e.target.value);
  }

  function handleInput2(e) {
    setPhone(e.target.value);
  }

  function handleInput3(e) {
    setEmail(e.target.value);
  }

  // функция которая срабатывает при нажатии на кнопку add
  function handleAdd() {
    // проверка на заполненность
    if (!firstName || !lastName || !phone || !email) {
      alert("input is empty");
      return;
    }

    // собираем новый таска со статусом false,т.к таск не выполнен изначально задаем id для редактирования и удаления
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      status: false,
      id: Date.now(),
    };
    //функция для добавления нового таска в массив todos ,из которого далее мы будем отображать таски в браузере
    props.handleTask(newContact);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  }
  return (
    <div className="add-todo">
      <h2>Добавить контакт</h2>
      <input
        type="text"
        value={firstName}
        onChange={handleInput}
        placeholder="Имя"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleInput1}
        placeholder="Фамилия"
      />
      <input
        type="text"
        value={phone}
        onChange={handleInput2}
        placeholder="Номер телефона"
      />
      <input
        type="text"
        value={email}
        onChange={handleInput3}
        placeholder="Почта"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};
export default AddTodo;
