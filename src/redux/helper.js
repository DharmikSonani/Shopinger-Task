import { useSelector } from "react-redux"

export const getFromReducer = (reducer) => {
    const data = useSelector(state => state[reducer]);
    return data;
}

export const reducers = {
    FriendListReducer: 'FriendListReducer',
}