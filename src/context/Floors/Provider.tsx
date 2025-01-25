import React, { memo, PropsWithChildren, useReducer } from "react"
import { floorsCtxReducer } from "./reducer"
import { initialFloorsCtxState } from "./state"
import { FloorsCtx } from "./Context"

const FloorsCtxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("FloorsCtxProvider")

  const [state, dispatch] = useReducer(floorsCtxReducer, initialFloorsCtxState)

  return (
    <FloorsCtx.Provider value={[state, dispatch]}>
      {children}
    </FloorsCtx.Provider>
  )
}

export default memo(FloorsCtxProvider)
