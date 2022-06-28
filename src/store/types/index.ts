import {rootReducer} from "../store"
import {ActionsChatType} from "../actions/types";

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsChatType