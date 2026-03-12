export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  COMPLETE_ALL: "COMPLETE_ALL",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
};

export function todosReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const nextId =
        todos.length > 0
          ? Math.max(...todos.map((t) => Number(t.id) || 0)) + 1
          : 1;
      return [...todos, { id: nextId, text: action.payload, completed: false }];
    }

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);

    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case ACTIONS.COMPLETE_ALL: {
      const allCompleted = todos.every((todo) => todo.completed);
      return todos.map((todo) => ({ ...todo, completed: !allCompleted }));
    }

    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter((todo) => !todo.completed);

    default:
      return todos;
  }
}
