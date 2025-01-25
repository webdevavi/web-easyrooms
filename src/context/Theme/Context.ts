import { createContext, Dispatch } from "react"
import { ThemeCtxAction, ThemeCtxState } from "./types"
import { initialThemeCtxState } from "./state"

export const ThemeCtx = createContext<
  [ThemeCtxState, Dispatch<ThemeCtxAction>]
>([initialThemeCtxState, () => {}])
