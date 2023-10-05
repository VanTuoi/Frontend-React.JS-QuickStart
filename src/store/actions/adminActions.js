import actionTypes from './actionTypes';

// nguoi dung
import getAllUsersService2 from '../../services/adminService'
import getAllUsersService from '../../services/adminService'
import createNewUserService from '../../services/adminService'
import deleteUserService from '../../services/adminService'
import editUserService from '../../services/adminService'

// San pham
import getAllProductService from '../../services/adminService'
import createNewProductService from '../../services/adminService'
import deleteProductService from '../../services/adminService'
import editProductService from '../../services/adminService'

// Don hang
import getAllOrderService from '../../services/adminService'
import createNewOrderService from '../../services/adminService'
import deleteOrderService from '../../services/adminService'
import editOrderService from '../../services/adminService'

// nhap hang
import getAllImportGoodsService from '../../services/adminService'
import createNewImportGoodsService from '../../services/adminService'
import deleteImportGoodsService from '../../services/adminService'
import editImportGoodsService from '../../services/adminService'


// khuyen mai
import getAllPromotionOrderService from '../../services/adminService'
import createNewPromotionOrderService from '../../services/adminService'
import deletePromotionOrderService from '../../services/adminService'
import editPromotionOrderService from '../../services/adminService'

import { toast } from "react-toastify"


// Auth
export const adminLoginSuccess = (userInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    userInfo: userInfo
})
export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL,
})
export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})


// Lấy quyền ng dùng
export const getRoleStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.GET_ROLE_START })
            // let res = await getAllCodeService('role')
            let res
            if (res && res.errCode === 0) {
                dispatch(getRoleSuccess(res.data))
            } else {
                dispatch(getRoleFailed());
            }
        } catch (e) {
            dispatch(getRoleFailed());
            console.log('getRoleStart error', e)
        }

    }
}
export const getRoleSuccess = (dataRole) => ({
    type: actionTypes.GET_ROLE_SUCCCESS,
    data: dataRole
})
export const getRoleFailed = () => ({
    type: actionTypes.GET_ROLE_FAIDED
})



//  user
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed")
                dispatch(getAllUser())
                dispatch(createUserSuccess())
            } else {
                toast.error('Fail to create a new user')
                dispatch(createUserFailed());
            }
        } catch (e) {
            toast.error('Fail to create a new user')
            dispatch(createUserFailed());
        }

    }
}
export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})
export const getAllUser = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsersService2("ALL")
            if (res && res.errCode === 0) {
                dispatch(getAllUserServicesuccess(res.user.reverse()))  //  user
            } else {
                toast.error("Get all user error ")
                dispatch(getAllUserFailed());
            }
        } catch (e) {
            console.log('get AllUser error', e)
            toast.error("Get all user error ee")
            dispatch(getAllUserFailed());
        }
    }
}
export const getAllUserServicesuccess = (data) => ({
    type: actionTypes.GET_ALL_USERS_SUCCESS,
    users: data
})
export const getAllUserFailed = () => ({
    type: actionTypes.GET_ALL_USERS_FAILDED,
})
export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new user succeed")
                dispatch(deleteUserSuccess())
                dispatch(getAllUser())
            } else {
                toast.error("Delete a user error ")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete a user error ")
            dispatch(deleteUserFailed());
            console.log('deleteUser error', e)
        }

    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELET_ORDER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELET_ORDER_FAILDED
})
export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new user succeed")
                dispatch(editUserSuccess())
                dispatch(getAllUser())
            } else {
                toast.error("Update a user error ")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update a user error ")
            dispatch(editUserFailed());
            console.log('editUser error', e)
        }

    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_ORDER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_ORDER_FAILDED
})


// product
export const createNewProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewProductService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new product succeed")
                dispatch(getAllProduct())
                dispatch(createProductSuccess())
            } else {
                toast.error('Fail to create a new product')
                dispatch(createProductFailed());
            }
        } catch (e) {
            toast.error('Fail to create a new product')
            dispatch(createProductFailed());
        }

    }
}
export const createProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS
})
export const createProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILDED
})
export const getAllProduct = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsersService("ALL", '123')        /// đang sửa

            if (res && res.errCode === 0) {
                dispatch(getAllProductSuccess(res.users.reverse()))  // products or product
            } else {
                toast.error("Get all product error ")
                dispatch(getAllProductFailed());
            }
        } catch (e) {
            toast.error("Get all product error e")
            dispatch(getAllProductFailed());
        }

    }
}
export const getAllProductSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    products: data
})
export const getAllProductFailed = () => ({
    type: actionTypes.GET_ALL_PRODUCT_FAILDED,
})
export const deleteProduct = (productId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteProductService(productId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new product succeed")
                dispatch(deleteProductSuccess())
                dispatch(getAllProduct())
            } else {
                toast.error("Delete a product error ")
                dispatch(deleteProductFailed());
            }
        } catch (e) {
            toast.error("Delete a product error ")
            dispatch(deleteProductFailed());
            console.log('deleteProduct error', e)
        }

    }
}
export const deleteProductSuccess = () => ({
    type: actionTypes.DELET_PRODUCT_SUCCESS
})
export const deleteProductFailed = () => ({
    type: actionTypes.DELET_PRODUCT_FAILDED
})
export const editProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editProductService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new product succeed")
                dispatch(editProductSuccess())
                dispatch(getAllProduct())
            } else {
                toast.error("Update a product error ")
                dispatch(editProductFailed());
            }
        } catch (e) {
            toast.error("Update a product error ")
            dispatch(editProductFailed());
            console.log('editProduct error', e)
        }

    }
}
export const editProductSuccess = () => ({
    type: actionTypes.EDIT_PRODUCT_SUCCESS
})
export const editProductFailed = () => ({
    type: actionTypes.EDIT_PRODUCT_FAILDED
})


// Order
export const createNewOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewOrderService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new order succeed")
                dispatch(getAllOrder())
                dispatch(createOrderSuccess())
            } else {
                toast.error('Fail to create a new order')
                dispatch(createOrderFailed());
            }
        } catch (e) {
            toast.error('Fail to create a new order')
            dispatch(createOrderFailed());
        }

    }
}
export const createOrderSuccess = () => ({
    type: actionTypes.CREATE_ORDER_SUCCESS
})
export const createOrderFailed = () => ({
    type: actionTypes.CREATE_ORDER_FAILDED
})
export const getAllOrder = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllOrderService("ALL")

            if (res && res.errCode === 0) {
                dispatch(getAllOrderSuccess(res.order.reverse()))  // orders or order
                dispatch(createOrderSuccess())
            } else {
                toast.error("Get all order error ")
                dispatch(getAllOrderFailed());
            }
        } catch (e) {
            toast.error("Get all order error e")
            dispatch(getAllOrderFailed());
            console.log('getAllOrder error', e)
        }

    }
}
export const getAllOrderSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    orders: data
})
export const getAllOrderFailed = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_FAILDED,
})
export const deleteOrder = (orderId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteOrderService(orderId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new order succeed")
                dispatch(deleteOrderSuccess())
                dispatch(getAllOrder())
            } else {
                toast.error("Delete a order error ")
                dispatch(deleteOrderFailed());
            }
        } catch (e) {
            toast.error("Delete a order error ")
            dispatch(deleteOrderFailed());
            console.log('deleteOrder error', e)
        }

    }
}
export const deleteOrderSuccess = () => ({
    type: actionTypes.DELET_ORDER_SUCCESS
})
export const deleteOrderFailed = () => ({
    type: actionTypes.DELET_ORDER_FAILDED
})
export const editOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editOrderService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new order succeed")
                dispatch(editOrderSuccess())
                dispatch(getAllOrder())
            } else {
                toast.error("Update a order error ")
                dispatch(editOrderFailed());
            }
        } catch (e) {
            toast.error("Update a order error ")
            dispatch(editOrderFailed());
            console.log('editOrder error', e)
        }

    }
}
export const editOrderSuccess = () => ({
    type: actionTypes.EDIT_ORDER_SUCCESS
})
export const editOrderFailed = () => ({
    type: actionTypes.EDIT_ORDER_FAILDED
})


//mportGood
export const createNewImportGoods = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewImportGoodsService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new ImportGoods succeed")
                dispatch(getAllImportGoods())
                dispatch(createImportGoodsSuccess())
            } else {
                toast.error('Fail to create a new ImportGoods')
                dispatch(createImportGoodsFailed());
            }
        } catch (e) {
            toast.error('Fail to create a new ImportGoods')
            dispatch(createImportGoodsFailed());
        }

    }
}
export const createImportGoodsSuccess = () => ({
    type: actionTypes.CREATE_IMPORTGOOD_SUCCESS
})
export const createImportGoodsFailed = () => ({
    type: actionTypes.CREATE_IMPORTGOOD_FAILDED
})
export const getAllImportGoods = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllImportGoodsService("ALL")

            if (res && res.errCode === 0) {
                dispatch(getAllImportGoodsSuccess(res.ImportGoods.reverse()))  // ImportGoodss or ImportGoods
                dispatch(createImportGoodsSuccess())
            } else {
                toast.error("Get all ImportGoods error ")
                dispatch(getAllImportGoodsFailed());
            }
        } catch (e) {
            toast.error("Get all ImportGoods error e")
            dispatch(getAllImportGoodsFailed());
            console.log('getAllImportGoods error', e)
        }

    }
}
export const getAllImportGoodsSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    ImportGoodss: data
})
export const getAllImportGoodsFailed = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_FAILDED,
})
export const deleteImportGoods = (ImportGoodsId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteImportGoodsService(ImportGoodsId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new ImportGoods succeed")
                dispatch(deleteImportGoodsSuccess())
                dispatch(getAllImportGoods())
            } else {
                toast.error("Delete a ImportGoods error ")
                dispatch(deleteImportGoodsFailed());
            }
        } catch (e) {
            toast.error("Delete a ImportGoods error ")
            dispatch(deleteImportGoodsFailed());
            console.log('deleteImportGoods error', e)
        }

    }
}
export const deleteImportGoodsSuccess = () => ({
    type: actionTypes.DELET_IMPORTGOOD_SUCCESS
})
export const deleteImportGoodsFailed = () => ({
    type: actionTypes.DELET_IMPORTGOOD_FAILDED
})
export const editImportGoods = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editImportGoodsService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new ImportGoods succeed")
                dispatch(editImportGoodsSuccess())
                dispatch(getAllImportGoods())
            } else {
                toast.error("Update a ImportGoods error ")
                dispatch(editImportGoodsFailed());
            }
        } catch (e) {
            toast.error("Update a ImportGoods error ")
            dispatch(editImportGoodsFailed());
            console.log('editImportGoods error', e)
        }

    }
}
export const editImportGoodsSuccess = () => ({
    type: actionTypes.EDIT_IMPORTGOOD_SUCCESS
})
export const editImportGoodsFailed = () => ({
    type: actionTypes.EDIT_IMPORTGOOD_FAILDED
})




export const createNewPromotionOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewPromotionOrderService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new PromotionOrder succeed")
                dispatch(getAllPromotionOrder())
                dispatch(createPromotionOrderSuccess())
            } else {
                toast.error('Fail to create a new PromotionOrder')
                dispatch(createPromotionOrderFailed());
            }
        } catch (e) {
            toast.error('Fail to create a new PromotionOrder')
            dispatch(createPromotionOrderFailed());
        }

    }
}
export const createPromotionOrderSuccess = () => ({
    type: actionTypes.CREATE_PROMOTIONORDER_SUCCESS
})
export const createPromotionOrderFailed = () => ({
    type: actionTypes.CREATE_PROMOTIONORDER_FAILDED
})
export const getAllPromotionOrder = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllPromotionOrderService("ALL")

            if (res && res.errCode === 0) {
                dispatch(getAllPromotionOrderSuccess(res.PromotionOrder.reverse()))  // PromotionOrders or PromotionOrder
                dispatch(createPromotionOrderSuccess())
            } else {
                toast.error("Get all PromotionOrder error ")
                dispatch(getAllPromotionOrderFailed());
            }
        } catch (e) {
            toast.error("Get all PromotionOrder error e")
            dispatch(getAllPromotionOrderFailed());
            console.log('getAllPromotionOrder error', e)
        }

    }
}
export const getAllPromotionOrderSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    PromotionOrders: data
})
export const getAllPromotionOrderFailed = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_FAILDED,
})
export const deletePromotionOrder = (PromotionOrderId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deletePromotionOrderService(PromotionOrderId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new PromotionOrder succeed")
                dispatch(deletePromotionOrderSuccess())
                dispatch(getAllPromotionOrder())
            } else {
                toast.error("Delete a PromotionOrder error ")
                dispatch(deletePromotionOrderFailed());
            }
        } catch (e) {
            toast.error("Delete a PromotionOrder error ")
            dispatch(deletePromotionOrderFailed());
            console.log('deletePromotionOrder error', e)
        }

    }
}
export const deletePromotionOrderSuccess = () => ({
    type: actionTypes.DELET_PROMOTIONORDER_SUCCESS
})
export const deletePromotionOrderFailed = () => ({
    type: actionTypes.DELET_PROMOTIONORDER_FAILDED
})
export const editPromotionOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editPromotionOrderService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new PromotionOrder succeed")
                dispatch(editPromotionOrderSuccess())
                dispatch(getAllPromotionOrder())
            } else {
                toast.error("Update a PromotionOrder error ")
                dispatch(editPromotionOrderFailed());
            }
        } catch (e) {
            toast.error("Update a PromotionOrder error ")
            dispatch(editPromotionOrderFailed());
            console.log('editPromotionOrder error', e)
        }

    }
}
export const editPromotionOrderSuccess = () => ({
    type: actionTypes.EDIT_PROMOTIONORDER_SUCCESS
})
export const editPromotionOrderFailed = () => ({
    type: actionTypes.EDIT_PROMOTIONORDER_FAILDED
})



// action overview
export const getSaleOverTime = (time) => {
    return async (dispatch, getState) => {
        try {
            let res
            // = await getSaleOverTimeService(data);        // time theo tuan thang nam
            if (res && res.errCode === 0) {
                toast.success("Get sales over time success")
                dispatch({
                    type: actionTypes.GET_SALES_OVER_TIME_SUCCESS,
                    data: res
                })
            } else {
                toast.error("Get sales over time faild")
                dispatch({
                    type: actionTypes.GET_SALES_OVER_TIME_FAILDED,
                })
            }
        } catch (e) {
            toast.error("SGet sales over time faild")
            dispatch({
                type: actionTypes.GET_SALES_OVER_TIME_FAILDED,
            })
        }

    }
}
export const getRevenueOverTime = (time) => {
    return async (dispatch, getState) => {
        try {
            let res
            // = await getSaleOverTimeService(data);        // time theo tuan thang nam
            if (res && res.errCode === 0) {
                toast.success("Get revenue over time success")
                dispatch({
                    type: actionTypes.GET_REVENUE_OVER_TIME_SUCCESS,
                    data: res
                })
            } else {
                toast.error("Get revenue over time faild")
                dispatch({
                    type: actionTypes.GET_REVENUE_OVER_TIME_FAILDED,
                })
            }
        } catch (e) {
            toast.error("SGet revenue over time faild")
            dispatch({
                type: actionTypes.GET_REVENUE_OVER_TIME_FAILDED,
            })
        }

    }
}


