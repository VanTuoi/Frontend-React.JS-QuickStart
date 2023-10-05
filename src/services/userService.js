import axios from "../axios";
import { toast } from "react-toastify"


// Auth
const LoginServiceUser = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
const RegisterService = (userData) => {
    return axios.post('/api/register', userData);
}

// Order user
const getCartService = (token) => {
    return axios.get('/api/get-cart', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const updateCartService = (data, token) => {
    return axios.put('/api/update-cart', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const orderService = (data, token) => {
    return axios.post('/api/order', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};

// Info account
const getInforAccountService = (token) => {
    return axios.post('/api/get-info-account', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const updateInforAccountService = (data, token) => {
    return axios.put('/api/update-info-account', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};


export default {
    LoginServiceUser, RegisterService, getCartService, updateCartService, orderService,
    getInforAccountService, updateInforAccountService
}