import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK
} from "../actions/types";

export default (state = [], action) => {
  let {id, data} = action.payload || {};
  switch(action.type) {
    case GET_TASKS: 
      return [...data, ...state];
    case CREATE_TASKS:
      return [data, ...state];
    case DELETE_TASK:
      let newState = state.filter(task => task.id !== id);
      return newState;
    case UPDATE_TASK:
      let updatedState = state.map(task => task.id !== id ? task: data);
      return updatedState;
    default:
      return state;
  }
};