import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import get from 'lodash/get';

export const axiosGet = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((response: AxiosResponse) => {
        const data = get(response, 'data', {});
        resolve(data);
      })
      .catch((error: AxiosError) => {
        const data = get(error, 'response.data');
        reject(data);
      });
  });
};

export const axiosPost = <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then((response: AxiosResponse) => {
        const data = get(response, 'data', {});
        resolve(data);
      })
      .catch((error: AxiosError) => {
        const data = get(error, 'response.data');
        reject(data);
      });
  });
};
