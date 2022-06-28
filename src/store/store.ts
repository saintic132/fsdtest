import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {AppActionType, AppStoreType} from "./types";
import {chatReducer} from "./reducers/chat";

export let rootReducer = combineReducers({
    chat: chatReducer
})
export const store: Store<AppStoreType, AppActionType> = createStore(rootReducer)