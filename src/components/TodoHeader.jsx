function TodoHeader({ onKeyDown, hasItems, onCompleteAll }) {
  return (
    <div className="input-group bg-white border rounded">
      <button
        type="button"
        className="btn border-1 rounded-0"
        onClick={onCompleteAll}
        style={!hasItems ? { opacity: 0, pointerEvents: 'none' } : {}}
        tabIndex={!hasItems ? -1 : 0}
      >
        ▾
      </button>
      <input
        type="text"
        className="form-control border-0 p-3"
        placeholder="What needs to be done?"
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TodoHeader;
