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
import { memo } from "react"

const ThemeSwitcher = () => {
  const [, { setTheme }] = useThemeCtx()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(Themes).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className="flex items-center justify-between capitalize"
          >
            {theme}
            {theme === Themes.Light && <Sun className="h-4 w-4" />}
            {theme === Themes.Dark && <Moon className="h-4 w-4" />}
            {theme === Themes.System && <PcCase className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(ThemeSwitcher)
