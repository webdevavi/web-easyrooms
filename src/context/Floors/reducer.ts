import { bookRooms } from "@/utils/bookRooms"
import { randomizeOccupancy } from "@/utils/randomizeOccupancy"
import { setupFloors } from "@/utils/setupFloors"
import { initialFloorsCtxState } from "./state"
import { FloorsCtxAction, FloorsCtxActionTypes, FloorsCtxState } from "./types"

export const floorsCtxReducer = (
  state = initialFloorsCtxState,
  action: FloorsCtxAction
): FloorsCtxState => {
  console.log(action.type)

  switch (action.type) {
    case FloorsCtxActionTypes.BOOK_ROOMS: {
      const [updatedFloors, bookedFloorIds] = bookRooms(
        state.floors,
        action.payload.count,
        action.payload.user
      )

      return {
        ...state,
        floors: updatedFloors,
        availableRoomsCount: state.totalRoomsCount - bookedFloorIds.length,
        latestBookedRoomIds: bookedFloorIds,
      }
    }

    case FloorsCtxActionTypes.RANDOMIZE_OCCUPANCY: {
      const [emptyFloors, totalRoomsCount] = setupFloors()

      const [updatedFloors, bookedFloorIds] = randomizeOccupancy(
        emptyFloors,
        action.payload.percent,
        action.payload.user
      )

      return {
        floors: updatedFloors,
        totalRoomsCount,
        availableRoomsCount: totalRoomsCount - bookedFloorIds.length,
        latestBookedRoomIds: bookedFloorIds,
      }
    }

    case FloorsCtxActionTypes.RESET: {
      const [floors, totalRoomsCount] = setupFloors()

      return {
        floors,
        totalRoomsCount,
        availableRoomsCount: totalRoomsCount,
      }
    }

    default: {
      return state
    }
  }
}
