import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterState";

const OPTIONS = [
  { value: "all", label: "Todas" },
  { value: "done", label: "Concluídas" },
  { value: "pending", label: "Pendentes" },
];

export function TodoFilter() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div className="filter" role="group" aria-label="Filtrar tarefas">
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          className={filter === o.value ? "active" : ""}
          aria-pressed={filter === o.value}
          onClick={() => setFilter(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
