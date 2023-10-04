import axios from "../axios";



const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const handleRegisterApi = (userData) => {
    return axios.post('/api/register', userData);
}



const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    // console.log('id', userId);
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}
const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`);
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctor`)
}
const saveDetailDoctorService = (data) => {
    return axios.post(`/api/save-infor-doctor`, data)
}

const getSaleOverTimeService = (time) => {
    return axios.get(``, time)
}
export {
    handleLoginApi, getAllUsers, createNewUserService,
    deleteUserService, editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService, handleRegisterApi,
    getSaleOverTimeService
}