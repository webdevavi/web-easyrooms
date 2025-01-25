import { LOCAL_STORAGE_USER_KEY } from "@/constants/User"
import { initialUserCtxState } from "./state"
import { UserCtxAction, UserCtxActionTypes, UserCtxState } from "./types"

export const userCtxReducer = (
  state = initialUserCtxState,
  action: UserCtxAction
): UserCtxState => {
  switch (action.type) {
    case UserCtxActionTypes.SET_USER:
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, action.payload)
      return { ...state, user: action.payload }
    default:
      return state
  }
}
