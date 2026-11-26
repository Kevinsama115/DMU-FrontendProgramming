import "./App.css";
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "커피마시기", isChecked: false },
    { id: 2, text: "공부하기", isChecked: false },
    { id: 3, text: "운동하기", isChecked: false },
  ]);

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (todoObj: Todo) => {
    window.alert(
      "체크 박스 상태 변경 : " + todoObj.text + " = " + !todoObj.isChecked,
    );

    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === todoObj.id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="titlebk">오늘 할일</h1>

      {/* Bootstrap 카드 영역 */}
      <div className="card">
        <div className="card-body">
          {/* Bootstrap 목록 그룹 */}
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {/* 체크박스와 할 일 내용을 묶는 영역 */}
                <div className="form-check">
                  {/* 체크박스 */}
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={todo.isChecked}
                    onChange={() => handleCheckboxChange(todo)}
                  />

                  {/* 완료 여부에 따른 할 일 표시 */}
                  <label className="form-check-label">
                    {todo.isChecked ? (
                      <del>{todo.text}</del>
                    ) : (
                      <span>{todo.text}</span>
                    )}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
