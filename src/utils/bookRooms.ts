import { Combination, Floor } from "@/context/Floors/types"

export const bookRooms = (
  floors: Floor[],
  count: number,
  user: string
): [Floor[], string[], Combination[]] => {
  const reversedFloors = [...floors].reverse()

  const bookedRoomIds: string[] = []

  const TRAVEL_TIME_BETWEEN_ROOMS = 1
  const TRAVEL_TIME_BETWEEN_FLOORS = 2

  let combination: Combination = { id: 0, travelTime: 0, candidates: [] }
  let combinations: Combination[] = []

  for (let floorIndex = 0; floorIndex < reversedFloors.length; floorIndex++) {
    for (
      let roomIndex = 0;
      roomIndex < reversedFloors[floorIndex].length;
      roomIndex++
    ) {
      if (!reversedFloors[floorIndex][roomIndex].isBooked) {
        combination.lastCandidate =
          combination.candidates[combination.candidates.length - 1]

        let verticalTravelTime = 0
        let horizontalTravelTime = 0

        if (combination.lastCandidate) {
          if (combination.lastCandidate.floorIndex !== floorIndex) {
            verticalTravelTime =
              (floorIndex - combination.lastCandidate.floorIndex) *
              TRAVEL_TIME_BETWEEN_FLOORS
            horizontalTravelTime =
              combination.lastCandidate.roomIndex * TRAVEL_TIME_BETWEEN_ROOMS +
              roomIndex * TRAVEL_TIME_BETWEEN_ROOMS
          } else {
            horizontalTravelTime =
              (roomIndex - combination.lastCandidate.roomIndex) *
              TRAVEL_TIME_BETWEEN_ROOMS
          }
        }

        const travelTimeFromLastCandidate =
          verticalTravelTime + horizontalTravelTime

        combination.candidates.push({
          floorIndex,
          roomIndex,
          travelTimeFromLastCandidate,
        })

        combination.travelTime = combination.candidates.reduce(
          (prev, curr) => prev + curr.travelTimeFromLastCandidate,
          0
        )

        if (combination.candidates.length === count) {
          const isSameFloor =
            combination.candidates[0].floorIndex ===
            combination.candidates[combination.candidates.length - 1].floorIndex

          if (isSameFloor) {
            combination.candidates.forEach((candidate) => {
              reversedFloors[candidate.floorIndex][
                candidate.roomIndex
              ].isBooked = true
              reversedFloors[candidate.floorIndex][
                candidate.roomIndex
              ].bookedByUser = user

              bookedRoomIds.push(
                `${candidate.floorIndex + 1}-${candidate.roomIndex + 1}`
              )
            })

            combination.isBest = true

            combinations.push(combination)

            return [reversedFloors.reverse(), bookedRoomIds, combinations]
          }

          combinations.push(combination)

          floorIndex = combination.candidates[0].floorIndex
          roomIndex = combination.candidates[0].roomIndex
          combination = {
            id: combinations.length,
            travelTime: 0,
            candidates: [],
          }
        }
      }
    }
  }

  if (combinations.length) {
    const bestCombination = combinations.reduce((prev, curr) => {
      return prev.travelTime <= curr.travelTime ? prev : curr
    })

    combinations = combinations.map((combination) => {
      if (combination.id === bestCombination.id) {
        combination.isBest = true
      }

      return combination
    })

    bestCombination.candidates.forEach((candidate) => {
      reversedFloors[candidate.floorIndex][candidate.roomIndex].isBooked = true
      reversedFloors[candidate.floorIndex][candidate.roomIndex].bookedByUser =
        user

      bookedRoomIds.push(
        `${candidate.floorIndex + 1}-${candidate.roomIndex + 1}`
      )
    })
  }

  return [reversedFloors.reverse(), bookedRoomIds, combinations]
}
