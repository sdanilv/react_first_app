import axios from "axios";
import {MoreType} from "redux/profileReducer/profileReducer";
import {UserType} from "redux/usersReducer/usersReducer";

export type APIType<D> = Promise<{ "data": D, "messages": string[], "resultCode": number }>

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b433c0ee-0352-49d1-8b3d-9ee339f6033b",
    }
});


export const UsersApi = {
    getUsers: (page: number, count: number): Promise<{items:UserType[], totalCount:number}> => {
        return axiosInstance
            .get(`users?count=${count}&page=${page}`)
            .then(result => {
                return result.data;
            });
    },
    follow: (userId: number) => {
        return axiosInstance.post(`follow/${userId}`);
    },
    unfollow: (userId: number) => {
        return axiosInstance.delete(`follow/${userId}`);
    }
};

export type MyDataType = { "id": string, "login": string, "email": string }

export const AuthApi = {
    getMe: async (): APIType<MyDataType> => {
        const response = await axiosInstance.get(`auth/me`);
        return response.data;
    },
    signIn: async (request: MyDataType): APIType<{ userId: string }> => {
        const response = await axiosInstance.post(`auth/login`, {...request});
        return response.data;
    },
    logout: async (): Promise<number> => {
        const response = await axiosInstance.delete(`auth/login`);
        return response.data.resultCode;
    },
    getCaptcha: async (): Promise<string> => {
        const response = await axiosInstance.get(`security/get-captcha-url`);
        return response.data.url;
    }

};
type GetUserProfileType =
    {
        "aboutMe": string | null,
        "contacts": {
            "facebook": string | null,
            "website": string | null,
            "vk": string | null,
            "twitter": string | null,
            "instagram": string | null,
            "youtube": string | null,
            "github": string | null,
            "mainLink": string | null
        },
        "lookingForAJob": boolean,
        "lookingForAJobDescription": string | null,
        "fullName": string,
        "userId": string,
        "photos": {
            "small": string | null,
            "large": string | null
        }
    }
export const ProfileApi = {
    getUserProfile: async (userId: string): Promise< GetUserProfileType > => {
        const result =await axiosInstance.get(`profile/${userId}`);
        return result.data
    },

    getUserStatus: (userId: string): Promise<{ data: string }> => {
        return axiosInstance.get(`profile/status/${userId}`);
    },

    setMyStatus: (status: string): Promise<APIType<boolean>> => {
        return axiosInstance.put(`profile/status/`, {status: status});
    },
    setMyProfileInfo: async (profile: MoreType): APIType<""> => {
        const result = await axiosInstance.put(`profile`, {...profile});
        return result.data
    },
    uploadPhoto: (img: File): APIType<boolean> => {

        let formData = new FormData();
        formData.append("image", img);
        return axiosInstance.post(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form -data"
            }
        })
    }
};
