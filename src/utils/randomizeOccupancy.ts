import { Floor } from "@/context/Floors/types"

export const randomizeOccupancy = (
  floors: Floor[],
  percent: number,
  user: string
): [Floor[], string[]] => {
  const flattened = floors.flat()

  const availableRooms = flattened.filter((room) => room.isBooked === false)
  const numberOfRoomsToBook = Math.floor(
    (availableRooms.length * percent) / 100
  )

  const indices = availableRooms.map((_, idx) => idx)
  const randomIndices = indices
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfRoomsToBook)

  const bookedRoomIds: string[] = []

  const updatedFlattened = flattened.map((room, idx) => {
    if (randomIndices.includes(idx)) {
      bookedRoomIds.push(room.id)
      return { ...room, isBooked: true, bookedByUser: user }
    }
    return room
  })

  const updatedFloors: Floor[] = []
  let startIndex = 0

  for (const floor of floors) {
    updatedFloors.push(
      updatedFlattened.slice(startIndex, startIndex + floor.length)
    )
    startIndex += floor.length
  }

  return [updatedFloors, bookedRoomIds]
}
