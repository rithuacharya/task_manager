import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_LOADER
} from "./types";
import taskAPI from "../api";
import history from "../history";

export const getTasks = () => async dispatch => {
  try {
    dispatch({
      type: SHOW_LOADER
    });
    let response = await taskAPI.get("/tasks");
    dispatch({
      type: GET_TASKS,
      payload: {
        data: response.data
      }
    });
  }
  catch (err) {
    dispatch(showModal({
      title: "Error",
      message: err.message
    }));
  }
};

export const createTask = data => async dispatch => {
  try {
    dispatch({
      type: SHOW_LOADER
    });
    let response = await taskAPI.post("/tasks", data);
    dispatch({
      type: CREATE_TASKS,
      payload: {
        data: response.data
      }
    });
    history.push("/");
    dispatch(showModal({
      title:  "Task Creation",
      message: `Task ${response.data.title} created`
    }));
  }
  catch (err) {
    dispatch(showModal({
      title: "Error",
      message: err.message
    }));
  }
};

export const updateTask = (id, data) => async dispatch => {
  try {
    dispatch({
      type: SHOW_LOADER
    });
    let response = await taskAPI.patch(`/tasks/${id}`, data);
    dispatch({
      type: UPDATE_TASK,
      payload: {
        id,
        data: response.data
      }
    });
    dispatch(showModal({
      title: "Task Update",
      message: `Task ${response.data.title} updated`,
    }));
  }
  catch (err) {
    dispatch(showModal({
      title: "Error",
      message: err.message
    }));
  }
};

export const deleteTask = id => async (dispatch, getState) => {
  try {
    let state = getState(), task;
    dispatch({
      type: SHOW_LOADER
    });
    await taskAPI.delete(`/tasks/${id}`);
    dispatch({
      type: DELETE_TASK,
      payload: {
        id
      }
    });
    task = state.tasks.find(task => task.id === id);
    dispatch(showModal({
      title: "Delete Task",
      message: `Task ${task.title} deleted`
    }));
  }
  catch (err) {
    dispatch(showModal({
      title: "Error",
      message: err.message
    }));
  }
};

export const showModal = info => {
  return {
    type: SHOW_MODAL,
    payload: info
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
}