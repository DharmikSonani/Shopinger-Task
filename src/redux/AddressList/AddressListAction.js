import { REMOVE_ADDRESS_LIST_DATA, SET_ADDRESS_LIST_DATA } from "../constants"

export const setAddressListInRedux = (data) => {
    return {
        type: SET_ADDRESS_LIST_DATA,
        data: data,
    }
}

export const removeAddressListRedux = () => {
    return {
        type: REMOVE_ADDRESS_LIST_DATA,
        data: [],
    }
}