import axios from 'axios';

axios.defaults.baseURL = 'https://api.opencagedata.com/geocode/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);
