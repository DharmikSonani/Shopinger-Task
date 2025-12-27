import { REMOVE_FRIEND_LIST_DATA, SET_FRIEND_LIST_DATA } from "../constants"

export const setFriendListInRedux = (data) => {
    return {
        type: SET_FRIEND_LIST_DATA,
        data: data,
    }
}

export const removeFriendListFromRedux = () => {
    return {
        type: REMOVE_FRIEND_LIST_DATA,
        data: [],
    }
}