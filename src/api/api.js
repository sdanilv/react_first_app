import axios from "axios";

const template = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "ade57208-42e1-4033-bb19-07633193cdde" }
});

export const UsersApi = {
  getUsers: (page, count) => {
    return template.get(`users?count=${count}&page=${page}`).then(result => {
      return result.data;
    });
  },
  follow: userId => {
    return template.post(`follow/${userId}`);
  },
  unfollow: userId => {
    return template.delete(`follow/${userId}`);
  }
};

export const AuthApi = {
  signIn: () => {
    return template.get(`auth/me`).then(response=> {return response.data});
  }
};
export const ProfileApi = {
  
  getUserProfile: (userId) => {
    return template.get(`profile/${userId}`)
}}