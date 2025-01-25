import { memo, PropsWithChildren, useReducer } from "react"
import { ThemeCtx } from "./Context"
import { themeCtxReducer } from "./reducer"
import { initialThemeCtxState } from "./state"

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(themeCtxReducer, initialThemeCtxState)

  return (
    <ThemeCtx.Provider value={[state, dispatch]}>{children}</ThemeCtx.Provider>
  )
}

export default memo(ThemeProvider)
