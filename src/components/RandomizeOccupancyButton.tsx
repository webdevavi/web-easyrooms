import React, { useState, useCallback } from "react"
import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const RandomizeOccupancyButton: React.FC = () => {
  const [, { randomizeOccupancy }] = useFloorsCtx()
  const [percent, setPercent] = useState(25)

  const handlePercentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      setPercent(Math.max(0, Math.min(100, value)))
    },
    []
  )

  const handleRandomize = useCallback(() => {
    randomizeOccupancy(percent)
  }, [percent, randomizeOccupancy])

  return (
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
              <Label htmlFor="percent">Percent</Label>
              <Input
                id="percent"
                type="number"
                min={0}
                max={100}
                value={percent}
                onChange={handlePercentChange}
                className="col-span-2 h-8"
              />
            </div>
            <Button onClick={handleRandomize}>Set</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default RandomizeOccupancyButton
