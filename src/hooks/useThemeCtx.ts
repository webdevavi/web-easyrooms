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

    const root = document.documentElement
    const savedTheme = state.theme

    // Validate and apply theme
    if (!Object.values(Themes).includes(savedTheme)) {
      console.error("Invalid theme value:", savedTheme)
      return
    }

    // Safely update localStorage
    try {
      localStorage?.setItem(LOCAL_STORAGE_THEME_KEY, savedTheme)
    } catch (error) {
      console.error("localStorage theme save failed:", error)
    }

    // Remove existing theme classes
    root.classList.remove(...Object.values(Themes))

    // Apply theme
    if (savedTheme === Themes.System) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? Themes.Dark
        : Themes.Light
      root.classList.add(systemTheme)
    } else {
      root.classList.add(savedTheme)
    }
  }, [initialize, state.theme])

  const setTheme = useCallback(
    (theme: Themes) => dispatch(actions.setTheme(theme)),
    [dispatch]
  )

  return [state, { setTheme }]
}
