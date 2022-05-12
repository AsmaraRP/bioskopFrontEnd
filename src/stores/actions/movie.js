import axios from "../../utils/axios";
export const getDataMovie = (page, limit, search, sort, releaseDate) => {
  return {
    type: "GET_DATA_MOVIE",
    payload: axios.get(
      `movie?page=${page}&limit=${limit}&searchName=${search}&sort=name ${sort}&searchRelease=${releaseDate}`
    )
  };
};
