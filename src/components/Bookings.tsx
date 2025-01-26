import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import React, { lazy, Suspense } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

// Lazy load components for performance
const FloorsSidebar = lazy(() => import("./FloorsSidebar"))
const RoomsGrid = lazy(() => import("./RoomsGrid"))
const BookRoomsDrawer = lazy(() => import("./BookRoomsDrawer"))

type BookingsProps = {
  showCombinations: () => void
}

const Bookings: React.FC<BookingsProps> = ({ showCombinations }) => {
  const [{ combinations }] = useFloorsCtx()

  return (
    <Card className="w-full">
      <CardHeader className="p-4">
        <CardTitle>Bookings</CardTitle>
        <CardDescription>
          Layout of the building and floors showing currently booked and
          available rooms
        </CardDescription>
      </CardHeader>
      <CardContent className="relative w-full p-0">
        <Suspense fallback={<div>Loading floors and rooms...</div>}>
          <FloorsSidebar />
          <RoomsGrid />

          {combinations?.length ? (
            <div className="p-4 flex flex-row space-x-2 items-center">
              <span className="text-sm">Why this combination?</span>
              <Button variant="link" className="p-0" onClick={showCombinations}>
                Check now <ArrowRight />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Suspense>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-center">
        <Suspense fallback={<div>Loading booking drawer...</div>}>
          <BookRoomsDrawer />
        </Suspense>
      </CardFooter>
    </Card>
  )
}

export default Bookings
