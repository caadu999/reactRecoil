import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { filterState } from "../atoms/filterState";

export const filteredTodosState = selector({
  key: "filteredTodosState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case "done":
        return list.filter((t) => t.done);
      case "pending":
        return list.filter((t) => !t.done);
      default:
        return list;
    }
  },
});
