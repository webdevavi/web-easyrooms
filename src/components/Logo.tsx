import { Themes } from "@/context/Theme/types"
import { useThemeCtx } from "@/hooks/useThemeCtx"
import { useThemeDetector } from "@/hooks/useThemeDetector"
import React, { memo } from "react"
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"

const Logo: React.FC = () => {
  const [{ theme }] = useThemeCtx()
  const isSystemThemeDark = useThemeDetector()

  return (
    <img
      src={
        (theme === Themes.System && isSystemThemeDark) || theme === Themes.Dark
          ? logoDark
          : logoLight
      }
      width={80}
      className="object-cover"
      alt="Logo"
    />
  )
}

export default memo(Logo)
