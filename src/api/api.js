import axios from "axios";
// import MyaAva from "../img/MyAva.jpg"

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "ade57208-42e1-4033-bb19-07633193cdde"
  }
});

export const UsersApi = {
  getUsers: (page, count) => {
    return axiosInstance
      .get(`users?count=${count}&page=${page}`)
      .then(result => {
        return result.data;
      });
  },
  follow: userId => {
    return axiosInstance.post(`follow/${userId}`);
  },
  unfollow: userId => {
    return axiosInstance.delete(`follow/${userId}`);
  }
};

export const AuthApi = {
  signIn: () => {
    return axiosInstance.get(`auth/me`).then(response => {
      return response.data;
    });
  }
};
export const ProfileApi = {
  getUserProfile: userId => {
    return axiosInstance.get(`profile/${userId}`);
  },

  getUserStatus: userId => {
    return axiosInstance.get(`profile/status/${userId}`);
  },

  setMyStatus: status => {
    return axiosInstance.put(`profile/status/`, { status: status });
  }
  // uploadPhoto: () => {

  //   let formData = new FormData();
  //   formData.append("image", MyaAva);
  //   axiosInstance.post(`profile/photo`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form -data"
  //     }
  //   }).then(res => console.log(res))
  // }
};
