function TodoActions({ itemsLeft, statusSelected, onStatusChange, onClearCompleted }) {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 flex-wrap border border-top-0">

      {/* Items left */}
      <div>
        <span className="text-secondary">{itemsLeft} items left</span>
      </div>

      {/* Status filter */}
      <div className="d-flex gap-2 flex-wrap">
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            type="button"
            className={`btn btn-outline-primary btn-sm ${statusSelected === status ? "active" : ""}`}
            onClick={() => onStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Clear completed */}
      <div>
        <button
          type="button"
          className="btn btn-link text-decoration-none p-0"
          onClick={onClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoActions;
