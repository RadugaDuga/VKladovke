import axios from "axios";

// axios instance
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "18c7aad9-4b2b-48f2-8c87-fb4c6fb642a3"
    }
});

// Users API
export const usersAPI = {
    getUsersData(currentPageNum = 1, pageSize = 8) {
        return instance.get(`users`, {
            params: { page: currentPageNum, count: pageSize }
        }).then(response => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`);
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`);
    },
};

// Security API
export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`);
    }
};

// Auth API
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

// Profile API
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status });
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfileData(profileFormData) {
        return instance.put(`/profile`, profileFormData);
    }
};