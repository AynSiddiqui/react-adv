import { useState } from "react";
import { ACTIONS } from "../reducers/todosReducer";

// generate each todo component which will be a for loop include a button to the left marking it as completed
function Todo({ todos, dispatch }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const onToggle = (id) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  const onDelete = (id) => dispatch({ type: ACTIONS.DELETE_TODO, payload: id });

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditValue(todo.text);
  };

  const saveEdit = (id) => {
    const trimmedValue = editValue.trim();
    if (trimmedValue) {
      dispatch({
        type: ACTIONS.UPDATE_TODO,
        payload: { id, text: trimmedValue },
      });
    }

    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

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
          {editingId === todo.id ? (
            <input
              type="text"
              className="form-control flex-grow-1 p-3"
              value={editValue}
              onChange={(event) => setEditValue(event.target.value)}
              onBlur={() => saveEdit(todo.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  saveEdit(todo.id);
                }
                if (event.key === "Escape") {
                  cancelEdit();
                }
              }}
              autoFocus
            />
          ) : (
            <p
              className={`flex-grow-1 mb-0 px-3 ${todo.completed ? 'text-decoration-line-through text-secondary' : ''}`}
              style={{ minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word' }}
              onDoubleClick={() => startEditing(todo)}
            >
              {todo.text}
            </p>
          )}
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
