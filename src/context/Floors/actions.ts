import { FloorsCtxAction, FloorsCtxActionTypes } from "./types"

export const bookRooms = (payload: {
  count: number
  user: string
}): FloorsCtxAction => {
  console.log("running action bookRooms")
  return {
    type: FloorsCtxActionTypes.BOOK_ROOMS,
    payload,
  }
}

export const randomizeOccupancy = (payload: {
  percent: number
  user: string
}): FloorsCtxAction => ({
  type: FloorsCtxActionTypes.RANDOMIZE_OCCUPANCY,
  payload,
})

export const reset = (): FloorsCtxAction => ({
  type: FloorsCtxActionTypes.RESET,
})
