import { apiClient } from "./ApiClient"

export const addSongApi = () => apiClient.post(`/addSong`);

export const viewSongsApi = () => apiClient.get(`/viewSongs`);

export const playSongsApi = () => apiClient.get(`/playSongs`);