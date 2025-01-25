import { createContext, Dispatch } from "react"
import { initialFloorsCtxState } from "./state"
import { FloorsCtxAction, FloorsCtxState } from "./types"

export const FloorsCtx = createContext<
  [FloorsCtxState, Dispatch<FloorsCtxAction>]
>([initialFloorsCtxState, () => {}])
