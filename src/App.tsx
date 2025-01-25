import React, { memo } from "react"
import BookRoomsDrawer from "./components/BookRoomsDrawer"
import FloorsSidebar from "./components/FloorsSidebar"
import Header from "./components/Header"
import RoomsGrid from "./components/RoomsGrid"
import { useThemeCtx } from "./hooks/useThemeCtx"

const App: React.FC = () => {
  useThemeCtx(true)

  return (
    <div className="flex flex-col w-full h-screen dark:bg-black overflow-x-hidden gap-4">
      <Header />

      <div className="relative flex flex-col w-full max-w-4xl mx-auto px-4 gap-4">
        <FloorsSidebar />
        <RoomsGrid />
        <BookRoomsDrawer />
      </div>
    </div>
  )
}

export default memo(App)
