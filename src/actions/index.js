import {
  GET_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK
} from "./types";
import taskAPI from "../api";
import history from "../history";

export const getTasks = () => async dispatch => {
  let response = await taskAPI.get("/tasks");
  dispatch({
    type: GET_TASKS,
    payload: {
      data: response.data
    }
  });
};

export const createTask = data => async dispatch => {
  let response = await taskAPI.post("/tasks", data);
  dispatch({
    type: CREATE_TASKS,
    payload: {
      data: response.data
    }
  });
  history.push("/");
};

export const updateTask = (id, data) => async dispatch => {
  let response = await taskAPI.patch(`/tasks/${id}`, data);
  dispatch({
    type: UPDATE_TASK,
    payload: {
      id,
      data: response.data
    }
  });
};

export const deleteTask = id => async dispatch => {
  await taskAPI.delete(`/tasks/${id}`);
  dispatch({
    type: DELETE_TASK,
    payload: {
      id
    }
  });
};