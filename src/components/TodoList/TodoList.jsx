import React from "react";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <div>
      <h2>Контактная книжка</h2>
      <ul className="todo-list">
        {props.todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input
              onChange={() => props.changeStatus(item.id)}
              type="checkbox"
            />
            <div className="contact-info">
              <div>
                <strong>Имя:</strong> {item.firstName}
              </div>
              <div>
                <strong>Фамилия:</strong> {item.lastName}
              </div>
              <div>
                <strong>Номер телефона:</strong> {item.phone}
              </div>
              <div>
                <strong>Почта:</strong> {item.email}
              </div>
            </div>
            <div className="actions">
              <button onClick={() => props.handleEdit(item)}>edit</button>
              <button onClick={() => props.handleDelete(item.id)}>
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
