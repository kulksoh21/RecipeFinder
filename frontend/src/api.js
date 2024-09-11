// Using axios as an interceptor to format the headers sent properly
// Axios checks if you have the proper access token

import axios from "axios"
import { ACCESS_TOKEN } from "./constants"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL //If we want an environment variable loaded inside of the javascript, we need VITE
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

export const getRecipes = async () => {
    try {
      const response = await api.get("/recipes/");
      return response.data;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  };

export default api