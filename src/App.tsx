import React, { lazy, Suspense, useCallback, useState } from "react"
import Header from "./components/Header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { useThemeCtx } from "./hooks/useThemeCtx"

const Bookings = lazy(() => import("./components/Bookings"))
const Combinations = lazy(() => import("./components/Combinations"))

const App: React.FC = () => {
  useThemeCtx(true)

  const [selectedTab, setSelectedTab] = useState<"bookings" | "combinations">(
    "bookings"
  )

  const showBookings = useCallback(() => {
    setSelectedTab("bookings")
  }, [])

  const showCombinations = useCallback(() => {
    setSelectedTab("combinations")
  }, [])

  return (
    <div className="flex flex-col w-full h-screen dark:bg-black">
      <Header />
      <div className="relative flex flex-col w-full max-w-4xl mx-auto px-4 gap-4">
        <Tabs defaultValue="bookings" value={selectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings" onClick={showBookings}>
              Bookings
            </TabsTrigger>
            <TabsTrigger value="combinations" onClick={showCombinations}>
              Combinations
            </TabsTrigger>
          </TabsList>

          <Suspense fallback={<div>Loading...</div>}>
            <TabsContent value="bookings" className="w-full">
              <Bookings showCombinations={showCombinations} />
            </TabsContent>

            <TabsContent value="combinations" className="w-full">
              <Combinations />
            </TabsContent>
          </Suspense>
        </Tabs>
      </div>
    </div>
  )
}

export default App
