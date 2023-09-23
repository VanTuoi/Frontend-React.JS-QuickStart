import actionTypes from './actionTypes';
import {
    createNewUserService, getAllCodeService, getAllUsers,
    deleteUserService, editUserService, getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService,
} from '../../services/useService';
import { toast } from "react-toastify"

export const fetchGenderStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService('gender')
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }

    }
}
export const fetchPositionStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_POSITION_START })
            let res = await getAllCodeService('position')
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart error', e)
        }

    }
}
export const fetchRoleStart = () => {

    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ROLE_START })
            let res = await getAllCodeService('role')
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error', e)
        }

    }
}
export const fetchGenderSuccess = (data) => ({
    type: actionTypes.FETCH_GENDER_SUCCCESS,
    data: data
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})
export const fetchPositionSuccess = (positiondata) => ({
    type: actionTypes.FETCH_POSITION_SUCCCESS,
    data: positiondata
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})
export const fetchRoleSuccess = (dataRole) => ({
    type: actionTypes.FETCH_ROLE_SUCCCESS,
    data: dataRole
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log('data create', data);
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed")
                dispatch(fetchAllUserStart())
                dispatch(saveUserSuccess())
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('fetchRoleStart error', e)
        }

    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})
export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")

            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.user.reverse()))  // users or user
                dispatch(saveUserSuccess())
            } else {
                toast.error("Fetch all user error ")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Fetch all user error e")
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUserStart error', e)
        }

    }
}
export const fetchAllUsersSuccess = (data) => (
    {
        type: actionTypes.FETCH_ALL_USERS_SUCCESS,
        users: data
    })
export const fetchAllUsersFailed = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED,
})
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete a new user succeed")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Delete a user error ")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete a user error ")
            dispatch(deleteUserFailed());
            console.log('deleteAUser error', e)
        }

    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELET_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELET_USER_FAILDED
})
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            console.log('data edit,', data, res)
            if (res && res.errCode === 0) {
                toast.success("Update a new user succeed")
                dispatch(editUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Update a user error ")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update a user error ")
            dispatch(editUserFailed());
            console.log('editAUser error', e)
        }

    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('3');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
                })
            }
        } catch (e) {
            console.log(e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
            })
        }

    }
}
export const fetchAllDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILDED,
            })
        }

    }
}
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success("Save detail doctor succeed")
                dispatch({
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Save detail doctor faild")
                dispatch({
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILDED,
                })
            }
        } catch (e) {
            toast.error("Save detail doctor faild")
            dispatch({
                type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILDED,
            })
        }

    }
}
