import { UserCtx } from "@/context/User/Context"
import * as actions from "@/context/User/actions"
import { useCallback, useContext } from "react"

export const useUserCtx = () => {
  const [state, dispatch] = useContext(UserCtx)

  const setUser = useCallback(
    (user: string) => dispatch(actions.setUser(user)),
    [dispatch]
  )

  return [state, { setUser }] as const
}
