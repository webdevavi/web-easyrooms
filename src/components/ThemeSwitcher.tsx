import React from "react"
import { Moon, PcCase, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Themes } from "@/context/Theme/types"
import { useThemeCtx } from "@/hooks/useThemeCtx"

const ThemeIcons = {
  [Themes.Light]: Sun,
  [Themes.Dark]: Moon,
  [Themes.System]: PcCase,
}

const ThemeSwitcher: React.FC = () => {
  const [, { setTheme }] = useThemeCtx()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="dark:absolute relative h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute dark:relative h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(Themes).map((theme) => {
          const Icon = ThemeIcons[theme]
          return (
            <DropdownMenuItem
              key={theme}
              onClick={() => setTheme(theme)}
              className="flex items-center justify-between capitalize"
            >
              {theme}
              <Icon className="h-4 w-4" />
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher
