import { LOCAL_STORAGE_THEME_KEY } from "@/constants/Theme"
import { ThemeCtxState, Themes } from "./types"

let theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes

if (!theme || !Object.values(Themes).includes(theme as Themes)) {
  theme = Themes.System
}

export const initialThemeCtxState: ThemeCtxState = {
  theme,
}
