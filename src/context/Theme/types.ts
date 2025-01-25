export enum Themes {
  Dark = "dark",
  Light = "light",
  System = "system",
}

export enum ThemeCtxActionTypes {
  SET_THEME = "SET_THEME",
}

export interface ThemeCtxState {
  theme: Themes
}

export type ThemeCtxAction = {
  type: ThemeCtxActionTypes
  payload: Themes
}
