import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  onSlide?: (currendIndex: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({ children, onSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? children.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === children.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, children.length])

  const jumpTo = useCallback(
    (index: number) => {
      if (index < children.length) {
        setCurrentIndex(index)
      }
    },
    [children.length]
  )

  useEffect(() => {
    onSlide?.(currentIndex)
  }, [currentIndex, onSlide])

  return (
    <div className="relative w-full mx-auto overflow-hidden flex flex-col gap-4">
      <div
        className="w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {children.length > 1 && (
        <div className="w-full flex justify-between items-center space-x-4">
          <div className="flex space-x-2">
            {children.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? "default" : "outline"}
                className={"w-2 h-2 rounded-full transition-colors p-0"}
                onClick={() => jumpTo(index)}
              />
            ))}
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carousel
