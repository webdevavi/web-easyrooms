import { setupFloors } from "@/utils/setupFloors"
import { FloorsCtxState } from "./types"

const [floors, totalRoomsCount] = setupFloors()

export const initialFloorsCtxState: FloorsCtxState = {
  floors,
  totalRoomsCount,
  availableRoomsCount: totalRoomsCount,
}
