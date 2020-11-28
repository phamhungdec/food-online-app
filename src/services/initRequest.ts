import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

// actions
import { setLoading } from 'actions/app.action';


export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
  authorize?: boolean
};

type IAxiosError = AxiosError & {
  config: {
    showSpinner?: boolean
  }
};

type IAxiosResponse = AxiosResponse & {
  config: {
    showSpinner?: boolean
  }
};


const requestConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
  authorize: false,
};

export const axiosInstance = axios.create(requestConfig);

export default function initRequest(store: any) {

  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config: IConfig) => {
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }
      return config;
    },
    (error: IAxiosError) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res: IAxiosResponse) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error: IAxiosError) => {
      if (error && error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );
}