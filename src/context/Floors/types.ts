export enum FloorsCtxActionTypes {
  BOOK_ROOMS = "BOOK_ROOMS",
  RANDOMIZE_OCCUPANCY = "RANDOMIZE_OCCUPANCY",
  RESET = "RESET",
}

export type Room = { id: string; isBooked: boolean; bookedByUser?: string }
export type Floor = Room[]

export type FloorsCtxState = {
  floors: Floor[]
  totalRoomsCount: number
  availableRoomsCount: number
  latestBookedRoomIds?: string[]
}

export type FloorsCtxAction =
  | {
      type: FloorsCtxActionTypes.BOOK_ROOMS
      payload: {
        count: number
        user: string
      }
    }
  | {
      type: FloorsCtxActionTypes.RANDOMIZE_OCCUPANCY
      payload: {
        percent: number
        user: string
      }
    }
  | { type: FloorsCtxActionTypes.RESET }
