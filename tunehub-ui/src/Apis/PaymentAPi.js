import { apiClient } from "./ApiClient"

export const payApi = () => apiClient.get(`/pay`);

export const paymentSuccessApi = () => apiClient.get(`/payment-success`);

export const paymentFailureApi = () => apiClient.get(`/payment-failure`);

export const createOrderApi = () => apiClient.post(`/createOrder`);

export const verifyPaymentApi = () => apiClient.post(`/verify`);