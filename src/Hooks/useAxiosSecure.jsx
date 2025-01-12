import axios from "axios";

const axiosSeure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  return axiosSeure;
};

export default useAxiosSecure;
