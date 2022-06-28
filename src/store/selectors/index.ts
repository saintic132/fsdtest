import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStoreType} from "../types";

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector

