import React, { memo } from "react"
import Logo from "./Logo"
import RandomizeOccupancyButton from "./RandomizeOccupancyButton"
import ResetButton from "./ResetButton"
import ThemeSwitcher from "./ThemeSwitcher"
import UserSwitcher from "./UserSwitcher"

const Header: React.FC = () => (
  <header className="w-full flex flex-row items-center justify-between py-2 px-4">
    <Logo />
    <div className="flex flex-row justify-center gap-2">
      <ThemeSwitcher />
      <RandomizeOccupancyButton />
      <ResetButton />
      <UserSwitcher />
    </div>
  </header>
)

export default memo(Header)
