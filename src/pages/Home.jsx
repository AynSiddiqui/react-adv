import { useEffect, useReducer, useState } from "react";
import TodoHeader from "../components/TodoHeader";
import Todo from "../components/Todo";
import TodoActions from "../components/TodoActions";
import { ACTIONS, todosReducer } from "../reducers/todosReducer";

const initialTodos = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
];

function Home() {
  const [allTodos, dispatch] = useReducer(todosReducer, initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);
  const [statusSelected, setStatusSelected] = useState("All");

  useEffect(() => {
    const nextFilteredTodos = allTodos.filter((todo) => {
      if (statusSelected === "Active") return !todo.completed;
      if (statusSelected === "Completed") return todo.completed;
      return true;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredTodos(nextFilteredTodos);
  }, [allTodos, statusSelected]);

  function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      const trimmedValue = event.target.value.trim();
      if (trimmedValue) {
        dispatch({ type: ACTIONS.ADD_TODO, payload: trimmedValue });
        event.target.value = "";
      }
    }
  }

  return (
    <div className="container mt-5">
      <TodoHeader
        onKeyDown={handleInputKeyDown}
        hasItems={allTodos.length > 0}
        onCompleteAll={() => dispatch({ type: ACTIONS.COMPLETE_ALL })}
      />

      {allTodos.length > 0 && (
        <>
          <Todo
            todos={filteredTodos}
            onToggle={(id) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id })}
            handleDelete={(id) => dispatch({ type: ACTIONS.DELETE_TODO, payload: id })}
          />
          <TodoActions
            itemsLeft={allTodos.filter((t) => !t.completed).length}
            statusSelected={statusSelected}
            onStatusChange={setStatusSelected}
            onClearCompleted={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
          />
        </>
      )}
    </div>
  );
}

export default Home;