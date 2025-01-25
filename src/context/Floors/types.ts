export enum FloorsCtxActionTypes {
  BOOK_ROOMS = "BOOK_ROOMS",
  RANDOMIZE_OCCUPANCY = "RANDOMIZE_OCCUPANCY",
  RESET = "RESET",
}

export interface Room {
  readonly id: string
  isBooked: boolean
  bookedByUser?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Floor extends Array<Room> {}

export interface Candidate {
  readonly floorIndex: number
  readonly roomIndex: number
  travelTimeFromLastCandidate: number
}

export interface Combination {
  id: number
  travelTime: number
  lastCandidate?: Candidate
  candidates: Candidate[]
  isBest?: boolean
}

export interface FloorsCtxState {
  readonly floors: Floor[]
  readonly totalRoomsCount: number
  availableRoomsCount: number
  latestBookedRoomIds?: string[]
  combinations?: Combination[]
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
