import { LOCAL_STORAGE_THEME_KEY } from "@/constants/Theme"
import { ThemeCtx } from "@/context/Theme/Context"
import * as actions from "@/context/Theme/actions"
import { ThemeCtxState, Themes } from "@/context/Theme/types"
import { useCallback, useContext, useEffect } from "react"

export const useThemeCtx = (
  initialize = false
): [ThemeCtxState, { setTheme: (theme: Themes) => void }] => {
  const [state, dispatch] = useContext(ThemeCtx)

  useEffect(() => {
    if (!initialize) return

    const root = window.document.documentElement

    // Validate theme value
    if (!Object.values(Themes).includes(state.theme)) {
      console.error("Invalid theme value:", state.theme)
      return
    }

    try {
      if (window.localStorage) {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, state.theme)
      }
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }

    root.classList.remove(...Object.values(Themes))

    if (state.theme === Themes.System) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
    } else {
      root.classList.add(state.theme)
    }
  }, [initialize, state])

  const setTheme = useCallback(
    (theme: Themes) => dispatch(actions.setTheme(theme)),
    [dispatch]
  )

  return [state, { setTheme }]
}
