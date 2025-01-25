import { Combination } from "@/context/Floors/types"
import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { cn } from "@/lib/utils"
import { getRoomIdForRoom } from "@/utils/getRoomIdForRoom"
import arrowCreate, { DIRECTION, HEAD, IArrow } from "arrows-svg"
import { cva } from "class-variance-authority"
import { Check, X } from "lucide-react"
import React, { useEffect, useMemo } from "react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

const cellVariants = cva(
  "w-8 h-8 md:w-12 md:h-12 rounded-lg flex flex-col items-center justify-center",
  {
    variants: {
      variant: {
        hidden:
          "text-slate-700 border-slate-200 dark:text-slate-200 dark:border-slate-400 border-2 opacity-20",
        highlighted: "bg-slate-200 dark:bg-slate-800",
      },
    },
    defaultVariants: {
      variant: "hidden",
    },
  }
)

type CombinationRoomsGridProps = {
  combination: Combination
}

const CombinationRoomsGrid: React.FC<CombinationRoomsGridProps> = ({
  combination,
}) => {
  const [{ floors }] = useFloorsCtx()

  useEffect(() => {
    const arrows = combination.candidates.reduce((acc, candidate, idx, arr) => {
      const nextCandidate = arr[idx + 1]
      if (!nextCandidate) return acc

      const current = document.getElementById(
        getRoomIdForRoom(candidate.floorIndex, candidate.roomIndex)
      )
      const next = document.getElementById(
        getRoomIdForRoom(nextCandidate.floorIndex, nextCandidate.roomIndex)
      )

      if (current && next) {
        const arrow = arrowCreate({
          from: {
            direction: DIRECTION.TOP_LEFT,
            node: current,
            translation: [0, 0],
          },
          to: {
            direction: DIRECTION.TOP,
            node: next,
            translation: [0, -5],
          },
          head: {
            func: HEAD.NORMAL,
            size: 6,
          },
        })
        document.body.append(arrow.node)
        acc.push(arrow)
      }
      return acc
    }, [] as IArrow[])

    return () => {
      arrows.forEach((arrow) => arrow.clear())
    }
  }, [combination.candidates])

  const alertIcon = combination.isBest ? (
    <Check className="h-4 w-4 stroke-green-400" />
  ) : (
    <X className="h-4 w-4 stroke-red-400" />
  )

  const alertTitle = useMemo(
    () =>
      cn([combination.isBest ? "text-green-400" : "text-red-400", "font-bold"]),
    [combination.isBest]
  )

  return (
    <div>
      <div className="p-4">
        <Alert>
          {alertIcon}
          <AlertTitle className={alertTitle}>
            {combination.isBest ? "The best!" : "Not the best!"}
          </AlertTitle>
          <AlertDescription className="max-w-xl text-white/60">
            This combination takes {combination.isBest ? "only" : ""}{" "}
            {combination.travelTime} minutes to travel between the rooms and is
            the most optimal combination.
          </AlertDescription>
        </Alert>
      </div>

      <div className="relative flex flex-row w-full px-24 overflow-x-auto">
        <div className="mx-auto min-w-max flex flex-col gap-2 md:gap-4 p-2">
          {floors.map((rooms, i) => (
            <div key={`floor-${i}`} className="flex flex-row gap-2 md:gap-4">
              {rooms.map(({ id }, j) => {
                const candidate = combination.candidates.find(
                  (candidate) =>
                    getRoomIdForRoom(
                      candidate.floorIndex,
                      candidate.roomIndex
                    ) === id
                )

                return (
                  <div
                    key={id}
                    id={id}
                    className={cn(
                      cellVariants({
                        variant: candidate ? "highlighted" : "hidden",
                      })
                    )}
                  >
                    {candidate ? (
                      <p className="text-xs font-semibold text-green-300">
                        {candidate.travelTimeFromLastCandidate
                          ? `+${candidate.travelTimeFromLastCandidate}m`
                          : "0"}
                      </p>
                    ) : (
                      <p className="text-xs font-semibold">
                        {(j + 1).toString().padStart(2, "0")}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CombinationRoomsGrid
