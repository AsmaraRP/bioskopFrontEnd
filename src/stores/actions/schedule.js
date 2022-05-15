import axios from "../../utils/axios";
export const getDataSchedule = (page, limit, search, sort) => {
  return {
    type: "GET_DATA_SCHEDULE",
    payload: axios.get(
      `schedule?page=${page}&limit=${limit}&searchLocation=${search}&sort=location ${sort}`
    )
  };
};
export const postSchedule = (form) => {
  return {
    type: "POST_SCHEDULE",
    payload: axios.post("schedule", form)
  };
};
export const updateSchedule = (id, form) => {
  return {
    type: "UPDATE_SCHEDULE",
    payload: axios.patch(`schedule/${id}`, form)
  };
};
export const deleteSchedule = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`schedule/${id}`)
  };
};
