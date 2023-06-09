import {AppDispatch} from "../../redux/Store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../../newRedux/store/Store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector