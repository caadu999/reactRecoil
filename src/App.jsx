import { TodoForm } from "./components/TodoForm";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";

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
