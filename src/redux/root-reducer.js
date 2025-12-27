import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FriendListReducer } from "./FriendList/FriendListReducer";

const confige = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    FriendListReducer,
})

export default persistRootReducer = persistReducer(confige, rootReducer);