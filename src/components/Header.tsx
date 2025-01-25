import { memo } from "react"
import Logo from "./Logo"
import RandomizeOccupancyButton from "./RandomizeOccupancyButton"
import ResetButton from "./ResetButton"
import ThemeSwitcher from "./ThemeSwitcher"
import UserSwitcher from "./UserSwitcher"

const Header = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-4">
      <Logo />
      <div className="flex flex-row justify-center gap-2">
        <ThemeSwitcher />
        <RandomizeOccupancyButton />
        <ResetButton />
        <UserSwitcher />
      </div>
    </div>
  )
}

export default memo(Header)
