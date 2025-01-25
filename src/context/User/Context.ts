import { createContext, Dispatch } from "react"
import { UserCtxAction, UserCtxState } from "./types"
import { initialUserCtxState } from "./state"

export const UserCtx = createContext<[UserCtxState, Dispatch<UserCtxAction>]>([
  initialUserCtxState,
  () => {},
])
