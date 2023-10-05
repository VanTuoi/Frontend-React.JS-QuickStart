import actionTypes from './actionTypes';
import { toast } from "react-toastify"
// cart
import getCartService from '../../services/userService'
import updateCartService from '../../services/userService'
import orderService from '../../services/userService'

// info
import getInforAccountService from '../../services/userService'
import updateInforAccountService from '../../services/userService'


// Auth
export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})
export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})
export const userRegisterSuccess = () => ({
    type: actionTypes.USER_REGISTER_SUCCESS
})
export const userRegisterFail = () => ({
    type: actionTypes.USER_REGISTER_FAIL
})
export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

// Order
export const userGetCart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getCartService()
            if (res && res.errCode === 0) {
                dispatch(userGetCartSuccess(res.user.reverse()))
            } else {
                toast.error("Get cart error ")
                dispatch(userGetCartFail());
            }
        } catch (e) {
            toast.error("Get cart error")
            dispatch(userGetCartFail());
            console.log('userGetCart error', e)
        }

    }
}
export const userGetCartSuccess = () => ({
    type: actionTypes.USER_GET_CART_SUCCESS
})
export const userGetCartFail = () => ({
    type: actionTypes.USER_GET_CART_FAIL
})
export const userOrder = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await orderService(data)
            if (res && res.errCode === 0) {
                toast.success("order succeed")
                dispatch(userOrderSuccess())
            } else {
                toast.error('Fail to order')
                dispatch(userOrderFail());
            }
        } catch (e) {
            toast.error('Fail to order')
            dispatch(userOrderFail());
        }

    }
}
export const userOrderSuccess = () => ({
    type: actionTypes.USER_ORDER_SUCCESS
})
export const userOrderFail = () => ({
    type: actionTypes.USER_ORDER_FAIL
})

