import { FloorsCtx } from "@/context/Floors/Context"
import * as actions from "@/context/Floors/actions"
import { FloorsCtxState } from "@/context/Floors/types"

import { useCallback, useContext } from "react"
import { useUserCtx } from "./useUserCtx"

export const useFloorsCtx = (): [
  FloorsCtxState,
  {
    bookRooms: (count: number) => void
    randomizeOccupancy: (percent: number) => void
    reset: () => void
  }
] => {
  const [{ user }] = useUserCtx()

  const [state, dispatch] = useContext(FloorsCtx)

  const bookRooms = useCallback(
    (count: number) => {
      console.log("DISPATCHING bookRooms", count)

      dispatch(actions.bookRooms({ count, user }))
    },
    [dispatch, user]
  )

  const randomizeOccupancy = useCallback(
    (percent: number) =>
      dispatch(
        actions.randomizeOccupancy({
          percent,
          user,
        })
      ),
    [dispatch, user]
  )

  const reset = useCallback(() => dispatch(actions.reset()), [dispatch])

  return [state, { bookRooms, randomizeOccupancy, reset }]
}
