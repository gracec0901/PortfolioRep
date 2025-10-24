import { CREATE_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo = {
        text: action.payload.text,
        isCompleted: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.text !== action.payload.text)
      };

    default:
      return state;
  }
};

export default todosReducer;