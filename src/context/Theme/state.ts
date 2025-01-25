import { LOCAL_STORAGE_THEME_KEY } from "@/constants/Theme"
import { ThemeCtxState, Themes } from "./types"

const getInitialTheme = (): Themes => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes
  return storedTheme && Object.values(Themes).includes(storedTheme)
    ? storedTheme
    : Themes.System
}

export const initialThemeCtxState: ThemeCtxState = {
  theme: getInitialTheme(),
}
