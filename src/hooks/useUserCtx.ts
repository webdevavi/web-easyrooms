import { UserCtx } from "@/context/User/Context"
import * as actions from "@/context/User/actions"
import { UserCtxState } from "@/context/User/types"
import { useCallback, useContext } from "react"

export const useUserCtx = (): [
  UserCtxState,
  { setUser: (user: string) => void }
] => {
  const [state, dispatch] = useContext(UserCtx)

  const setUser = useCallback(
    (user: string) => dispatch(actions.setUser(user)),
    [dispatch]
  )

  return [state, { setUser }]
}
