import axios from "axios";
import {ChangeMyProfileInfoType} from "redux/profileReducer/profileReducer";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b433c0ee-0352-49d1-8b3d-9ee339f6033b",
    }
});

export const UsersApi = {
    getUsers: (page:number, count:number) => {
        return axiosInstance
            .get(`users?count=${count}&page=${page}`)
            .then(result => {
                return result.data;
            });
    },
    follow: (userId:number) => {
        return axiosInstance.post(`follow/${userId}`);
    },
    unfollow: (userId:number) => {
        return axiosInstance.delete(`follow/${userId}`);
    }
};

export const AuthApi = {
    getMe: async () => {
        const response = await axiosInstance.get(`auth/me`);
        return response.data;
    },
    signIn: async (request:{id: number, email:string, login: string}) => {
        const response = await axiosInstance.post(`auth/login`, {...request});
        return response.data;
    },
    logout: async () => {
        const response = await axiosInstance.delete(`auth/login`);
        return response.data.resultCode;
    },
    getCaptcha: async () => {
        const response = await axiosInstance.get(`security/get-captcha-url`);
        return response.data.url;
    }

};
export const ProfileApi = {
    getUserProfile: (userId:string) => {
        return axiosInstance.get(`profile/${userId}`);
    },

    getUserStatus: (userId:string) => {
        return axiosInstance.get(`profile/status/${userId}`);
    },

    setMyStatus: (status:string) => {
        return axiosInstance.put(`profile/status/`, {status: status});
    },
    setMyProfileInfo: (profile:ChangeMyProfileInfoType) => {
        return axiosInstance.put(`profile`, {...profile})
    },
    uploadPhoto: (img:File) => {

        let formData = new FormData();
        formData.append("image", img);
        return axiosInstance.post(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form -data"
            }
        })
    }
};
