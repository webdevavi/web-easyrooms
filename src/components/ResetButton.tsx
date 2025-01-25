import React from "react"
import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { Button } from "./ui/button"

const ResetButton: React.FC = () => {
  const [, { reset }] = useFloorsCtx()

  return (
    <Button variant="link" onClick={reset}>
      Reset
    </Button>
  )
}

export default ResetButton
