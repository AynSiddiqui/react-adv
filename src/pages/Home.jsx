import { useMemo, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import TodoHeader from "../components/TodoHeader";
import Todo from "../components/Todo";
import TodoActions from "../components/TodoActions";
import { todosReducer } from "../reducers/todosReducer";

const initialTodos = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
];

function TodoListSection({ allTodos, dispatch, statusSelected }) {

  const filteredTodos = useMemo(
    () =>
      allTodos.filter((todo) => {
        if (statusSelected === "Active") return !todo.completed;
        if (statusSelected === "Completed") return todo.completed;
        return true;
      }),
    [allTodos, statusSelected]
  );

  if (allTodos.length === 0) return null;

  return (
    <>
      <Todo todos={filteredTodos} dispatch={dispatch} />
      <TodoActions todos={allTodos} dispatch={dispatch} />
    </>
  );
}

function Home() {
  const [allTodos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <>
      <div className="container mt-5">
        <TodoHeader dispatch={dispatch} />

        <Routes>
          <Route index element={<TodoListSection allTodos={allTodos} dispatch={dispatch} statusSelected="All" />} />
          <Route path="active" element={<TodoListSection allTodos={allTodos} dispatch={dispatch} statusSelected="Active" />} />
          <Route
            path="completed"
            element={<TodoListSection allTodos={allTodos} dispatch={dispatch} statusSelected="Completed" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default Home;