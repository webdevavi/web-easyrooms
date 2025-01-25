import { Floor, Room } from "@/context/Floors/types"

export const setupFloors = (): [Floor[], number] => [
  Array(10)
    .fill("")
    .map((_, floorIdx) =>
      floorIdx === 9
        ? Array(7)
            .fill("")
            .map(
              (_, roomIdx) =>
                ({
                  id: `${floorIdx + 1}-${roomIdx + 1}`,
                  isBooked: false,
                } as Room)
            )
        : Array(10)
            .fill("")
            .map(
              (_, roomIdx) =>
                ({
                  id: `${floorIdx + 1}-${roomIdx + 1}`,
                  isBooked: false,
                } as Room)
            )
    )
    .reverse(),
  97,
]
