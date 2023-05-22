import {
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_USERS_SUCCESS,
    PAGE_RELOAD
} from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    users: [],
    val: false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload
            }
        case PAGE_RELOAD:
            console.log("inside reducer page reload", payload);
            return {
                ...state,
                val: payload
            }

        default:
            return state
    }
}
