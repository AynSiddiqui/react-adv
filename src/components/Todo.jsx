import { ACTIONS } from "../reducers/todosReducer";

// generate each todo component which will be a for loop include a button to the left marking it as completed
function Todo({ todos, dispatch }) {
  const onToggle = (id) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  const onDelete = (id) => dispatch({ type: ACTIONS.DELETE_TODO, payload: id });

  return (
    <div className="border border-top-0 border-bottom-0 bg-white text-secondary">
      {todos.map((todo) => (
        <div key={todo.id} className="d-flex align-items-center gap-3 p-3 border-bottom">
          <input
            type="checkbox"
            className="form-check-input rounded-circle"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            style={{ width: '2rem', height: '2rem'}}
            aria-label="Toggle todo completion"
          />
          <p
            className={`flex-grow-1 mb-0 px-3 ${todo.completed ? 'text-decoration-line-through text-secondary' : ''}`}
            style={{ minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}
          >
            {todo.text}
          </p>
          {/* create delete button */}
            <button
                type="button"
                className="btn btn-sm rounded-circle btn-outline-danger"
              onClick={() => onDelete(todo.id)}
               style={{ width: '2rem', height: '2rem', flexShrink: 0 }}
            >
                 X
            </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
