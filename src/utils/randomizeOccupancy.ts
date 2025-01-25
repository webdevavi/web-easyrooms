import { Floor } from "@/context/Floors/types"

export const randomizeOccupancy = (
  floors: Floor[],
  percent: number,
  user: string
): [Floor[], string[]] => {
  const availableRooms = floors.flat().filter((room) => !room.isBooked)
  const numberOfRoomsToBook = Math.floor(
    (availableRooms.length * percent) / 100
  )

  const bookedRooms = availableRooms
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfRoomsToBook)
    .map((room) => ({ ...room, isBooked: true, bookedByUser: user }))

  const bookedRoomIds = bookedRooms.map((room) => room.id)

  const updatedFloors = floors.map((floor) =>
    floor.map(
      (room) =>
        bookedRooms.find((bookedRoom) => bookedRoom.id === room.id) || room
    )
  )

  return [updatedFloors, bookedRoomIds]
}
