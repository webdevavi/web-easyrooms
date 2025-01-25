import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getUserAvatar } from "@/utils/getUserAvatar"
import React, { memo } from "react"

const roomVariants = cva(
  "w-8 h-8 md:w-12 md:h-12 rounded-lg flex flex-col items-center justify-center",
  {
    variants: {
      variant: {
        available:
          "text-slate-700 border-slate-200 dark:text-slate-200 dark:border-slate-400 border-2",
        "old-booked": "bg-slate-200 dark:bg-slate-800 opacity-20",
        "new-booked": "bg-slate-200 dark:bg-slate-800",
      },
    },
    defaultVariants: {
      variant: "available",
    },
  }
)

const RoomsGrid: React.FC = () => {
  const [{ floors, latestBookedRoomIds }] = useFloorsCtx()

  return (
    <div className="relative flex flex-row w-full px-24 overflow-x-auto">
      <div className="mx-auto min-w-max flex flex-col gap-2 md:gap-4 p-2">
        {floors.map((rooms, i) => (
          <div key={`floor-${i}`} className="flex flex-row gap-2 md:gap-4">
            {rooms.map(({ id, isBooked, bookedByUser }, j) => (
              <div
                key={`floor-${i}-room-${j}`}
                className={cn(
                  roomVariants({
                    variant: isBooked
                      ? latestBookedRoomIds?.includes(id)
                        ? "new-booked"
                        : "old-booked"
                      : "available",
                  })
                )}
              >
                {isBooked && bookedByUser ? (
                  <Avatar className="w-4 h-4 md:w-8 md:h-8">
                    <AvatarImage
                      src={getUserAvatar(bookedByUser)}
                      alt={bookedByUser}
                    />
                    <AvatarFallback>{bookedByUser}</AvatarFallback>
                  </Avatar>
                ) : (
                  <p className="text-xs font-semibold">
                    {(j + 1).toString().padStart(2, "0")}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(RoomsGrid)
