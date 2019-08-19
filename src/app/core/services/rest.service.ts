import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common = {Authorisation: `Bearer ${localStorage.getItem('jwtToken')}`};

export class RestService {

  public get(url: string, options: any) {
    return axios.get(url, options);
  }
  public put(url: string, body: any) {
    return axios.put(url, body);
  }
  public post(url: string, body: any) {
    return axios.post(url, body);
  }
  public delete(url: string) {
    return axios.delete(url);
  }
}
