import { useRecoilValue } from "recoil";
import { filteredTodosState } from "../selectors/filteredTodoState";
import TodoItem from "./todoItem";

export function TodoList() {
  const todos = useRecoilValue(filteredTodosState);

  if (todos.length === 0) {
    return <p className="empty">Nenhuma tarefa por aqui.</p>;
  }

  return (
    <ul className="list">
      {todos.map((t) => (
        <TodoItem key={t.id} item={t} />
      ))}
    </ul>
  );
}

export default TodoList;
