import { initialThemeCtxState } from "./state"
import { ThemeCtxAction, ThemeCtxActionTypes, ThemeCtxState } from "./types"

export const themeCtxReducer = (
  state = initialThemeCtxState,
  action: ThemeCtxAction
): ThemeCtxState => {
  switch (action.type) {
    case ThemeCtxActionTypes.SET_THEME: {
      return { ...state, theme: action.payload }
    }
    default:
      return state
  }
}
