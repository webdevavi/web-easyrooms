import { useFloorsCtx } from "@/hooks/useFloorsCtx"
import { Button } from "./ui/button"
import { memo } from "react"

const ResetButton = () => {
  const [, { reset }] = useFloorsCtx()

  return (
    <Button variant="link" onClick={reset}>
      Reset
    </Button>
  )
}

export default memo(ResetButton)
