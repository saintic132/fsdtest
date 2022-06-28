import {rootReducer} from "../store"

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType = any