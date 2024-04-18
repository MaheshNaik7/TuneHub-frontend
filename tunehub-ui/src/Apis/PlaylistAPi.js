import { apiClient } from "./ApiClient"

export const createPlaylistApi = () => apiClient.get(`/createPlaylist`);

export const addPlaylistApi = () => apiClient.post(`/addPlaylist`);

export const viewPlaylistApi = () => apiClient.get(`/viewPlaylist`);