import { ThemeCtxAction, ThemeCtxActionTypes, Themes } from "./types"

export const setTheme = (payload: Themes): ThemeCtxAction => ({
  type: ThemeCtxActionTypes.SET_THEME,
  payload,
})
