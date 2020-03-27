import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 100000,
  });
}