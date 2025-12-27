import { SET_FRIEND_LIST_DATA, REMOVE_FRIEND_LIST_DATA } from "../constants";

const initialState = [];

export const FriendListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIEND_LIST_DATA:
            return action.data;
        case REMOVE_FRIEND_LIST_DATA:
            return [];
        default:
            return state;
    }
}