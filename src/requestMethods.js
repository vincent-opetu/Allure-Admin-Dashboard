import axios from 'axios';

// const BASE_URL = "http://localhost:5000/api/v1";
const BASE_URL = "https://allure-api.onrender.com/api/v1";
const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjYzNGIwMDg2ODJmMzZlYjQzNTE5NDk3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjQyODQwOSwiZXhwIjoxNjY2Njg3NjA5fQ.HWEXt24ssQDDzFFCsskRzfk4W4zCihc-pYOkjsDUkOI";
const token = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken : fakeToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `${token}` }
});