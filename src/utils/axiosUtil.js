import axios from 'axios';
import { ENV } from '../config';

axios.defaults.baseURL = ENV.API_URL;

export default axios;
