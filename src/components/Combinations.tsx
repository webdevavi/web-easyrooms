import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import React, { useState } from "react"
import Carousel from "./Carousel"
import CombinationRoomsGrid from "./CombinationRoomsGrid"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

const Combinations: React.FC = () => {
  const [{ combinations }] = useFloorsCtx()

  const [currentIndex, setCurrentIndex] = useState(0)

  if (!combinations?.length) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Combinations</CardTitle>
          <CardDescription>No combinations available.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="w-full p-4">
        <Carousel onSlide={setCurrentIndex}>
          {combinations?.map((combination, index) => (
            <div key={index}>
              {currentIndex === index && (
                <CombinationRoomsGrid key={index} combination={combination} />
              )}
            </div>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default Combinations
