import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddressListReducer } from "./AddressList/AddressListReducer";

const confige = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    AddressListReducer,
})

export default persistRootReducer = persistReducer(confige, rootReducer);