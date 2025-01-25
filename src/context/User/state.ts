import { LOCAL_STORAGE_USER_KEY } from "@/constants/User"
import { UserCtxState } from "./types"

export const initialUserCtxState: UserCtxState = {
  user: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "Oliver",
}
