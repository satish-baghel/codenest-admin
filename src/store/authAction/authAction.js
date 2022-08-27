import { LOGIN_SUCCESS, AUTH_FAIL, LOAD_USER, LOGOUT } from '../actions';
import { get, post } from 'utils/method';
import { dispatch } from '../index';

/* eslint-disable */
export function loginUser(data) {
    return async () => {
        try {
            const res = await post(`api/user/login`, data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(loadUser());
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            });
        }
    };
}

//
export function loadUser() {
    return async () => {
        try {
            const res = await get(`api/user/auth`);
            dispatch({
                type: LOAD_USER,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            });
        }
    };
}

export function logout() {
    return async () => {
        dispatch({
            type: LOGOUT
        });
    };
}
/* eslint-enable */
