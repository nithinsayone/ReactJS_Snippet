import { axiosInstance } from './axiosInstance';

/*global API_END_POINT */
/*eslint no-undef: "error"*/
export const getData = () => {
  return axiosInstance.get(API_END_POINT);
};