import React, { memo, PropsWithChildren, useReducer } from "react"
import { UserCtx } from "./Context"
import { userCtxReducer } from "./reducer"
import { initialUserCtxState } from "./state"

const UserCtxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(userCtxReducer, initialUserCtxState)

  return (
    <UserCtx.Provider value={[state, dispatch]}>{children}</UserCtx.Provider>
  )
}

export default memo(UserCtxProvider)
