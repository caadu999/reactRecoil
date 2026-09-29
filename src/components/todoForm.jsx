import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

let nextId = 1;

export function TodoForm() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  function handleSubmit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTodos((old) => [...old, { id: nextId++, text: value, done: false }]);
    setText("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="O que precisa ser feito?"
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
