import {rootReducer} from "../store"
import {ActionsChatType} from "../actions/types";
import { ThunkDispatch } from "redux-thunk";
import {useDispatch} from "react-redux";

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsChatType

export type ThunksDispatch = ThunkDispatch<AppStoreType, any, AppActionType>
export const useAppDispatch = () => useDispatch<ThunksDispatch>()