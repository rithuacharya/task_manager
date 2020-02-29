import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_LOADER
} from "../actions/types";

const initialState = {
  tasks: [],
  loading: false,
  modal: {
    info: {
      title: null,
      message: null
    },
    isOpen: false
  }
};

export default (state = initialState, action) => {
  let {id, data} = action.payload || {};
  switch(action.type) {
    case GET_TASKS:
      return {...state, tasks: [...data, ...state.tasks], loading: false};
    case CREATE_TASKS:
      return {...state, tasks: [data, ...state.tasks], loading: false};
    case DELETE_TASK:
      let newTasks = state.tasks.filter(task => task.id !== id);
      return {...state, tasks: newTasks, loading: false};
    case UPDATE_TASK:
      let updatedTasks = state.tasks.map(task => task.id !== id ? task: data);
      return {...state, tasks: updatedTasks, loading: false};

    case SHOW_MODAL:
      let modal = {...state.modal};
      modal.info = action.payload;
      return {...state, modal: {info: {...action.payload}, isOpen: true}, loading: false};
    case HIDE_MODAL:
      let hide_modal = {...state.modal};
      hide_modal.isOpen = false;
      return {...state, modal: {...hide_modal}};
      
    case SHOW_LOADER:
      return {...state, loading: true};
    default:
      return state;
  }
};
