import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,     // thông tin admin
    roles: [],          // quyền

    users: [],          // ds người dùng
    products: [],       // ds san pham
    orders: [],         // ds don hang



    sales: [
        { labels: '', value: '' },
    ],
    revenue: [
        { labels: '', value: '' },
    ],

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        // system
        case actionTypes.GET_ROLE_SUCCCESS:
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.GET_ROLE_FAIDED:
            state.roles = [];
            return {
                ...state,
            }
        case actionTypes.GET_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_USERS_FAILDED:
            state.users = [];
            return {
                ...state,
            }
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            state.products = action.products;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_PRODUCT_FAILDED:
            state.products = [];
            return {
                ...state,
            }

        //////////////////////////////////////////////////////////////
        case actionTypes.GET_SALES_OVER_TIME_SUCCESS:
            state.sales = action.data;
            return {
                ...state,
            }
        case actionTypes.GET_SALES_OVER_TIME_FAILDED:
            state.sales = [];
            return {
                ...state,
            }
        case actionTypes.GET_REVENUE_OVER_TIME_SUCCESS:
            state.revenue = action.data;
            return {
                ...state,
            }
        case actionTypes.GET_REVENUE_OVER_TIME_FAILDED:
            state.revenue = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;