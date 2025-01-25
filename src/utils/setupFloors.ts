import { Floor } from "@/context/Floors/types"
import { getRoomIdForRoom } from "./getRoomIdForRoom"

export const setupFloors = (): [Floor[], number] => {
  const floors = Array.from({ length: 10 })
    .map((_, floorIdx) => {
      const roomCount = floorIdx === 9 ? 7 : 10
      return Array.from({ length: roomCount }).map((_, roomIdx) => ({
        id: getRoomIdForRoom(floorIdx, roomIdx),
        isBooked: false,
      }))
    })
    .reverse()

  return [floors, 97]
}
