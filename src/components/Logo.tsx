import React, { memo, useMemo } from "react"
import { Themes } from "@/context/Theme/types"
import { useThemeCtx } from "@/hooks/useThemeCtx"
import { useThemeDetector } from "@/hooks/useThemeDetector"
import logoDark from "../assets/logo-dark.png"
import logoLight from "../assets/logo-light.png"

const Logo: React.FC = () => {
  const [{ theme }] = useThemeCtx()
  const isSystemThemeDark = useThemeDetector()

  const logoSrc = useMemo(
    () =>
      (theme === Themes.System && isSystemThemeDark) || theme === Themes.Dark
        ? logoDark
        : logoLight,
    [theme, isSystemThemeDark]
  )

  return <img src={logoSrc} className="object-cover w-20 h-12 " alt="Logo" />
}

export default memo(Logo)
