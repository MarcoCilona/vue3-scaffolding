import axios from 'axios';
console.log(process.env);
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

export const TestApi = {
  users() {
    return instance.get('users');
  }
};
