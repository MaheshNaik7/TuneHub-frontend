import { apiClient } from "./ApiClient"

// export const loginApi = () => apiClient.get(`/login`, {
//     // headers: {
//     //     'Origin': 'http://localhost:3000' // Add Origin header here
//     // }
// });

export const loginApi = async (email, password) => {
    try {
      const response = await apiClient.post('/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const registerationApi = () => apiClient.get(`/registeration`);

export const newSongApi = () => apiClient.get(`/newSong`);

