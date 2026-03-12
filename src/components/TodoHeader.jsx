import { ACTIONS } from "../reducers/todosReducer";

function TodoHeader({ dispatch }) {
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmedValue = event.target.value.trim();
      if (trimmedValue) {
        dispatch({ type: ACTIONS.ADD_TODO, payload: trimmedValue });
        event.target.value = "";
      }
    }
  };

  return (
    <div className="input-group bg-white border rounded">
      <button
        type="button"
        className="btn border-1 rounded-0"
        onClick={() => dispatch({ type: ACTIONS.COMPLETE_ALL })}
      >
        ▾
      </button>
      <input
        type="text"
        className="form-control border-0 p-3"
        placeholder="What needs to be done?"
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
}

export default TodoHeader;
