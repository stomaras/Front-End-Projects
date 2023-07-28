import { error } from "console"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from "axios"

// return an action
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// return an action
export const fetchUsersSuccess = (users: any[]) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// return an action
export const fetchUsersFailure = (error: string) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// by using the thunk middleware return another function , it is allow to have side effects 
// receives dispatch method as it arguments
export const fetchUsers = () => {
    return (dispatch:any) => {
        dispatch(fetchUsersRequest)
        axios.get('https://json.placeholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}