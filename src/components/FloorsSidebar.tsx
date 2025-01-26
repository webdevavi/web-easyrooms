import React from "react"
import { useFloorsCtx } from "@/hooks/useFloorsCtx"

const FloorsSidebar: React.FC = () => {
  const [{ floors }] = useFloorsCtx()

  return (
    <div className="absolute left-0 top-0 p-2 pl-4 flex flex-col gap-2 md:gap-4 pr-8 bg-gradient-to-r from-white to-transparent dark:from-slate-950 from-50% dark:to-transparent z-10">
      {floors.map((_, i) => (
        <div
          key={`floor-desc-${i}`}
          className="w-8 h-8 md:w-16 md:h-12 flex items-center justify-center"
        >
          <div className="flex flex-col text-right">
            <p className="text-xs md:text-lg font-semibold text-slate-500 dark:text-slate-200 leading-none">
              {(10 - i).toString().padStart(2, "0")}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600 leading-none">
              Floor
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FloorsSidebar
