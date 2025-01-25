import { FloorsCtxAction, FloorsCtxActionTypes } from "./types"

export const bookRooms = ({
  count,
  user,
}: {
  count: number
  user: string
}): FloorsCtxAction => ({
  type: FloorsCtxActionTypes.BOOK_ROOMS,
  payload: { count, user },
})

export const randomizeOccupancy = ({
  percent,
  user,
}: {
  percent: number
  user: string
}): FloorsCtxAction => ({
  type: FloorsCtxActionTypes.RANDOMIZE_OCCUPANCY,
  payload: { percent, user },
})

export const reset = (): FloorsCtxAction => ({
  type: FloorsCtxActionTypes.RESET,
})
