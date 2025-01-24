import { cva } from "class-variance-authority"
import React, { memo, useCallback, useState } from "react"
import logoDark from "./assets/logo-dark.png"
import logoLight from "./assets/logo-light.png"
import { useThemeDetector } from "./hooks/useThemeDetector"

import { cn } from "@/lib/utils"
import { Button } from "./components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Minus, Plus } from "lucide-react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./components/ui/drawer"

/**
 * Styling variations for room availability using class-variance-authority.
 * The "available" variant has a border and text color, while the "booked" variant is grayed out.
 */
const roomVariants = cva(
  "w-8 h-8 md:w-12 md:h-12 rounded-lg flex flex-col items-center justify-center",
  {
    variants: {
      variant: {
        available:
          "text-slate-700 border-slate-200 dark:text-slate-200 dark:border-slate-400 border-2",
        booked:
          "text-slate-200 bg-slate-500 dark:bg-slate-400 dark:text-slate-200 opacity-20",
      },
    },
    defaultVariants: {
      variant: "available",
    },
  }
)

/**
 * Initial state for room availability across floors. Each array represents a floor, with booleans indicating room availability.
 */
const initialData = [
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, true, true],
]

const App: React.FC = () => {
  const isDarkTheme = useThemeDetector()

  // State to track room availability data
  const [data, setData] = useState(initialData)

  // Function to reset room availability data to the initial state
  const resetData = useCallback(() => {
    setData(initialData)
  }, [])

  const [randomPercent, setRandomPercent] = useState(20)

  /**
   * Randomizes the room availability based on a given percentage.
   * It marks a set percentage of rooms as "booked" (false).
   *
   * @param percentage The percentage of rooms to mark as booked.
   */
  const randomizeData = useCallback(() => {
    // Flattening the initial data array to make it easier to work with
    const flattened = initialData.flat()

    // Calculate how many rooms should be booked
    const trueValues = flattened.filter((value) => value === true)
    const numberOfFalseToInsert = Math.floor(
      (trueValues.length * randomPercent) / 100
    )

    // Randomly select indices to mark as booked
    const indices = trueValues.map((_, idx) => idx)
    const randomIndices = indices
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfFalseToInsert)

    // Update the rooms availability by marking the selected indices as booked
    const updatedFlattened = flattened.map((value, idx) =>
      randomIndices.includes(idx) ? false : value
    )

    // Reshape the flattened array back to its original structure
    const updatedData: boolean[][] = []
    let startIndex = 0
    for (const row of initialData) {
      updatedData.push(
        updatedFlattened.slice(startIndex, startIndex + row.length)
      )
      startIndex += row.length
    }

    setData(updatedData)
  }, [randomPercent])

  const [selectedRooms, setSelectedRooms] = useState(1)

  return (
    <div className="flex flex-col w-full h-screen dark:bg-black overflow-x-hidden gap-4">
      {/* Logo and buttons for randomization and reset */}
      <div className="w-full flex flex-row items-center justify-between px-4">
        <img
          src={isDarkTheme ? logoDark : logoLight}
          width={80}
          className="object-cover"
          alt="Logo"
        />
        <div className="flex flex-row justify-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Randomize</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Randomize state</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the percent of rooms to mark as booked.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Percent</Label>
                    <Input
                      id="percent"
                      type="number"
                      min={0}
                      max={100}
                      value={randomPercent}
                      onChange={(e) =>
                        setRandomPercent(parseInt(e.target.value))
                      }
                      className="col-span-2 h-8"
                    />
                  </div>
                  <Button onClick={randomizeData}>Set</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="link" onClick={resetData}>
            Reset
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col w-full max-w-4xl mx-auto">
        {/* Floor labels */}
        <div className="absolute left-0 top-0 p-2 flex flex-col gap-2 md:gap-4 pr-8 bg-gradient-to-r from-white to-transparent dark:from-black from-50% dark:to-transparent z-10">
          {data.map((_, i) => (
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

        {/* Room grid */}
        <div className="relative flex flex-row w-full px-24 overflow-x-auto">
          <div className="mx-auto min-w-max flex flex-col gap-2 md:gap-4 p-2">
            {data.map((rooms, i) => (
              <div key={`floor-${i}`} className="flex flex-row gap-2 md:gap-4">
                {rooms.map((isAvailable, j) => (
                  <div
                    key={`floor-${i}-room-${j}`}
                    className={cn(
                      roomVariants({
                        variant: isAvailable ? "available" : "booked",
                      })
                    )}
                  >
                    <p className="text-xs font-semibold">
                      {(j + 1).toString().padStart(2, "0")}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drawer for room booking */}
      <Drawer onClose={() => setSelectedRooms(1)}>
        <DrawerTrigger asChild>
          <Button size="lg" className="w-full max-w-sm self-center">
            Book Rooms
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Add Room</DrawerTitle>
              <DrawerDescription>
                Choose up to 5 rooms to book.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() =>
                    setSelectedRooms((prev) => Math.max(1, prev - 1))
                  }
                  disabled={selectedRooms <= 1}
                >
                  <Minus />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter dark:text-white">
                    {selectedRooms}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Rooms
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() =>
                    setSelectedRooms((prev) => Math.min(5, prev + 1))
                  }
                  disabled={selectedRooms >= 5}
                >
                  <Plus />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
            </div>
            <DrawerFooter>
              <Button>Book</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default memo(App)
