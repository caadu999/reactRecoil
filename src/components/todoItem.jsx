import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

export function TodoItem({ item }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggle = () =>
    setTodos(
      todos.map((t) => (t.id === item.id ? { ...t, done: !t.done } : t)),
    );

  const remove = () => setTodos(todos.filter((t) => t.id !== item.id));

  return (
    <li className={item.done ? "item done" : "item"}>
      <label>
        <input type="checkbox" checked={item.done} onChange={toggle} />
        <span>{item.text}</span>
      </label>
      <button
        className="remove"
        onClick={remove}
        aria-label={`Remover ${item.text}`}
      >
        Remover
      </button>
    </li>
  );
}

export default TodoItem;
