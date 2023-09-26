import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    isAdmin: "NO",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    started: true,
    language: 'vi',
    systemMenuPath: '/home',
    contentOfConfirmModal: {
        ...initContentOfConfirmModal
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_START_UP_COMPLETE:
            return {
                ...state,
                started: true
            }
        case actionTypes.SET_CONTENT_OF_CONFIRM_MODAL:
            return {
                ...state,
                contentOfConfirmModal: {
                    ...state.contentOfConfirmModal,
                    ...action.contentOfConfirmModal
                }
            }
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.language,
            }
        case actionTypes.PROCESS_GOTO_LOGIN:
            console.log('run login');
            state.systemMenuPath = '/home'
            return {
                ...state,
                systemMenuPath: ''
            }
        case actionTypes.PROCESS_GOTO_REGISTER:
            console.log('run reg');
            return {
                ...state,
                systemMenuPath: '/a'
            }
        default:
            return state;
    }
}

export default appReducer;