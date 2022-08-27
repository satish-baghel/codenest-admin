import { LOGIN_SUCCESS, AUTH_FAIL, LOAD_USER, LOGOUT } from 'store/actions';

const initialState = {
    user: {},
    token: localStorage.getItem('adminToken'),
    isAuthenticated: false,
    loading: true
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('adminToken', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                user: payload.user
            };

        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.result
            };

        case AUTH_FAIL:
        case LOGOUT:
            localStorage.removeItem('adminToken');
            return {
                user: {},
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}

export default userReducer;
