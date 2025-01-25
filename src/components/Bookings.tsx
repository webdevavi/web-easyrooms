import React, { lazy, Suspense } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card"

// Lazy load components for performance
const FloorsSidebar = lazy(() => import("./FloorsSidebar"))
const RoomsGrid = lazy(() => import("./RoomsGrid"))
const BookRoomsDrawer = lazy(() => import("./BookRoomsDrawer"))

const Bookings: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
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
