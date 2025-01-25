export const getRoomIdForRoom = (floorIndex: number, roomIndex: number) =>
  `${floorIndex + 1}-${roomIndex + 1}`
