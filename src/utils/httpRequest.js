import axios from 'axios';
const config = {
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTY2NTIyNTcwMywiZXhwIjoxNjY3ODE3NzAzLCJuYmYiOjE2NjUyMjU3MDMsImp0aSI6IlJzbkEyNEFiQXcwbXhYUEEiLCJzdWIiOjM4ODcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.TY85O-RULP84apTrZmdsUtiFTNDK5TZDnjRAiGxPjOQ`,
    },
};
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 700,
    ...config,
});

export default request;
