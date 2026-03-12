import { NavLink } from "react-router-dom";
import { ACTIONS } from "../reducers/todosReducer";

function TodoActions({ todos, dispatch }) {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="d-flex justify-content-between align-items-center p-3 flex-wrap border border-top-0">

      {/* Items left */}
      <div>
        <span className="text-secondary">{itemsLeft} items left</span>
      </div>

      {/* Status filter as NavLinks */}
      <div className="d-flex gap-2 flex-wrap">
        {[
          { key: "All", label: "All", to: "/" },
          { key: "Active", label: "Active", to: "/active" },
          { key: "Completed", label: "Completed", to: "/completed" },
        ].map(({ key, label, to }) => (
          <NavLink
            key={key}
            to={to}
            className={({ isActive }) =>
              `btn btn-outline-primary btn-sm ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Clear completed */}
      <div>
        <button
          type="button"
          className="btn btn-link text-decoration-none p-0"
          onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoActions;
