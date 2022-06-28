import axios from "../../utils/axios";
export const getDataBooking = (id) => {
  return {
    type: "GET_DATA_BOOKING",
    payload: axios.get(`booking/user/${id}`)
  };
};
