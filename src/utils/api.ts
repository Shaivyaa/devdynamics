import axios from "axios";

export const fetchDeveloperData = async () => {
  const response = await axios.get("https://your-mock-api-endpoint.com");
  return response.data;
};
