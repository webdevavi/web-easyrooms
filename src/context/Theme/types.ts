export enum Themes {
  Dark = "dark",
  Light = "light",
  System = "system",
}

export enum ThemeCtxActionTypes {
  SET_THEME = "SET_THEME",
}

export type ThemeCtxState = {
  theme: Themes
}

export type ThemeCtxAction = {
  type: ThemeCtxActionTypes
  payload: Themes
}
