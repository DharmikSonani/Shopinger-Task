import { SET_ADDRESS_LIST_DATA, REMOVE_ADDRESS_LIST_DATA } from "../constants";

const initialState = [];

export const AddressListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADDRESS_LIST_DATA:
            return action.data;
        case REMOVE_ADDRESS_LIST_DATA:
            return [];
        default:
            return state;
    }
}