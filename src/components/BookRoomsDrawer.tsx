import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { Minus, Plus } from "lucide-react"
import React, { memo, useState } from "react"
import { Button } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"

const BookRoomsDrawer: React.FC = () => {
  const [{ availableRoomsCount }, { bookRooms }] = useFloorsCtx()

  const [count, setCount] = useState(1)

  return (
    <Drawer onClose={() => setCount(1)}>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          className="w-full md:max-w-sm self-center"
          disabled={!availableRoomsCount}
        >
          {availableRoomsCount ? "Book Now" : "Sold Out"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="dark:text-white">Add Room</DrawerTitle>
            <DrawerDescription>Choose up to 5 rooms to book.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                disabled={count <= 1}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter dark:text-white">
                  {count}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground dark:text-white">
                  Rooms
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() =>
                  setCount((prev) =>
                    Math.min(Math.min(5, availableRoomsCount), prev + 1)
                  )
                }
                disabled={count >= 5}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={() => bookRooms(count)}>Book</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default memo(BookRoomsDrawer)
