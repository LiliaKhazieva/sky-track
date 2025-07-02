import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { TRootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
