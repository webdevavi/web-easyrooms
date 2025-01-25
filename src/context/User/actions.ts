import { UserCtxAction, UserCtxActionTypes } from "./types"

export const setUser = (payload: string): UserCtxAction => ({
  type: UserCtxActionTypes.SET_USER,
  payload,
})
