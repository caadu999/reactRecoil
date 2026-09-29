import { TodoForm } from "./components/todoForm";
import { TodoFilter } from "./components/todoFilter";
import { TodoList } from "./components/todoList";

export default function App() {
  return (
    <main className="app">
      <h1>Tarefas</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </main>
  );
}
