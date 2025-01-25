import React, { useState, useEffect, useMemo } from "react"
import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import CombinationRoomsGrid from "./CombinationRoomsGrid"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const Combinations: React.FC = () => {
  const [{ combinations }] = useFloorsCtx()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const carouselContent = useMemo(
    () =>
      combinations?.map((combination, index) => (
        <CarouselItem key={index}>
          {index === current && (
            <CombinationRoomsGrid combination={combination} />
          )}
        </CarouselItem>
      )),
    [combinations, current]
  )

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
      <CardContent className="w-full p-0">
        <Carousel setApi={setApi} className="w-full p-0">
          <CarouselContent>{carouselContent}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default Combinations
