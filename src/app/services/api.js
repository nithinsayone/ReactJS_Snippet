import { axiosInstance } from './axiosInstance';

export const getData = () => {
  return axiosInstance.get(API_END_POINT);
}