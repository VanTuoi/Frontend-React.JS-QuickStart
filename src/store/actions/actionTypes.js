const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCCESS: 'FETCH_GENDER_SUCCCESS',
    FETCH_GENDER_FAIDED: 'FETCH_GENDER_FAIDED',

    FETCH_POSITION_START: 'FETCH_POSITION_START',
    FETCH_POSITION_SUCCCESS: 'FETCH_POSITION_SUCCCESS',
    FETCH_POSITION_FAIDED: 'FETCH_POSITION_FAIDED',

    FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCCESS: 'FETCH_ROLE_SUCCCESS',
    FETCH_ROLE_FAIDED: 'FETCH_ROLE_FAIDED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILDED: 'CREATE_USER_FAILDED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILDED: 'EDIT_USER_FAILDED',

    DELET_USER_SUCCESS: 'DELET_USER_SUCCESS',
    DELET_USER_FAILDED: 'DELET_USER_FAILDED',

    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILDED: 'FETCH_ALL_USERS_FAILDED',

})

export default actionTypes;