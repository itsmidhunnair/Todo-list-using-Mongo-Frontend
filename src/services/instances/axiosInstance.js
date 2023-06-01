import axios from 'axios';

// Server URL
const serverUrl = process.env.REACT_APP_BASE_URL;

// Creating a New Axios Instance
const axiosInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * A class with different static methods for different operations
 * @method post
 * @method get
 * @summary All the api call are hit here
 */
export default class Api {
  static async post(config) {
    let { data, url, headers = {}, ...restConfig } = config;
    const postConfig = {
      headers: {
        ...axiosInstance.defaults.headers,
        ...headers,
      },
      ...restConfig,
    };
    return axiosInstance.post(url, data, postConfig);
  }

  static async get(config) {
    let { url } = config;
    return axiosInstance.get(url);
  }

  static async put(config) {
    let { data, url, headers = {}, ...restConfig } = config;
    const putConfig = {
      headers: {
        ...axiosInstance.defaults.headers,
        ...headers,
      },
      ...restConfig,
    };
    return axiosInstance.put(url, data, putConfig);
  }

  static async delete(config) {
    let { url, headers = {}, ...restConfig } = config;
    const putConfig = {
      headers: {
        ...axiosInstance.defaults.headers,
        ...headers,
      },
      ...restConfig,
    };
    return axiosInstance.delete(url, putConfig);
  }
}
