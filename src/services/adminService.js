import axios from '../axios';
import * as queryString from 'query-string';


// Auth
const LoginService = (userEmail, userPassword) => {
    return axios.post('/api/login-admin', { email: userEmail, password: userPassword })
}

// user

const getAllUsersService2 = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
};



const getAllUsersService = (inputId, token) => {
    return axios.get(`/api/get-all-user?id=${inputId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const createNewUserService = (data, token) => {
    return axios.post('/api/create-new-user', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const deleteUserService = (userId, token) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
const editUserService = (data, token) => {
    return axios.put('/api/edit-user', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};


// product
const getAllProductService = (inputId, token) => {
    return axios.get(`/api/get-all-product?id=${inputId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const createNewProductService = (data, token) => {
    return axios.post('/api/create-new-product', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const deleteProductService = (productId, token) => {
    return axios.delete('/api/delete-product', {
        data: {
            id: productId
        }
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
const editProductService = (data, token) => {
    return axios.put('/api/edit-product', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};


// Order
const getAllOrderService = (inputId, token) => {
    return axios.get(`/api/get-all-order?id=${inputId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const createNewOrderService = (data, token) => {
    return axios.post('/api/create-new-order', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const deleteOrderService = (orderId, token) => {
    return axios.delete('/api/delete-order', {
        data: {
            id: orderId
        }
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
const editOrderService = (data, token) => {
    return axios.put('/api/edit-order', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};


//ImportGoods
const getAllImportGoodsService = (inputId, token) => {
    return axios.get(`/api/get-all-importGoods?id=${inputId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const createNewImportGoodsService = (data, token) => {
    return axios.post('/api/create-new-importGoods', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const deleteImportGoodsService = (importGoodsId, token) => {
    return axios.delete('/api/delete-importGoods', {
        data: {
            id: importGoodsId
        }
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
const editImportGoodsService = (data, token) => {
    return axios.put('/api/edit-importGoods', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};


//PromotionOrder
const getAllPromotionOrderService = (inputId, token) => {
    return axios.get(`/api/get-all-PromotionOrder?id=${inputId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const createNewPromotionOrderService = (data, token) => {
    return axios.post('/api/create-new-PromotionOrder', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};
const deletePromotionOrderService = (PromotionOrderId, token) => {
    return axios.delete('/api/delete-PromotionOrder', {
        data: {
            id: PromotionOrderId
        }
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
const editPromotionOrderService = (data, token) => {
    return axios.put('/api/edit-PromotionOrder', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};



// Overview
const getSaleOverTimeService = (time, token) => {
    return axios.get(``, time, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
};

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(loginBody) {
        return axios.post(`/admin/login`, loginBody)
    },

};

export default {
    adminService, LoginService, getAllUsersService2,
    getAllUsersService, createNewUserService, deleteUserService, editUserService,
    getAllProductService, createNewProductService, deleteProductService, editProductService,
    getAllOrderService, createNewOrderService, deleteOrderService, editOrderService,
    getAllImportGoodsService, createNewImportGoodsService, deleteImportGoodsService, editImportGoodsService,
    getAllPromotionOrderService, createNewPromotionOrderService, deletePromotionOrderService, editPromotionOrderService,
    getSaleOverTimeService
};