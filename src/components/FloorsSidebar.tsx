import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import React, { memo } from "react"

const FloorsSidebar: React.FC = () => {
  const [{ floors }] = useFloorsCtx()

  return (
    <div className="absolute left-0 top-0 p-2 pl-4 flex flex-col gap-2 md:gap-4 pr-8 bg-gradient-to-r from-white to-transparent dark:from-black from-50% dark:to-transparent z-10">
      {floors.map((_, i) => (
        <div
          key={`floor-desc-${i}`}
          className="h-8 md:h-12 flex items-center justify-center"
        >
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-200">
            Floor {(10 - i).toString().padStart(2, "0")}
          </p>
        </div>
      ))}
    </div>
  )
}

export default memo(FloorsSidebar)
