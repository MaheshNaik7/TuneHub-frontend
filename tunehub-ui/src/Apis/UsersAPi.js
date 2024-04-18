import { apiClient } from "./ApiClient"

// export const registerApi = () => apiClient.post(`/register`, {
//     // headers: {
//     //     'Origin': 'http://localhost:3000' // Add Origin header here
//     // }
// });

export const registerApi = async (email, password) => {
    try {
      const response = await apiClient.post('/register', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const validateApi = () => apiClient.post(`/validate`);

export const logoutApi = () => apiClient.get(`/logout`);