import React, { lazy, Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import Header from "./components/Header"
import { useThemeCtx } from "./hooks/useThemeCtx"

const Bookings = lazy(() => import("./components/Bookings"))
const Combinations = lazy(() => import("./components/Combinations"))

const App: React.FC = () => {
  useThemeCtx(true)

  return (
    <div className="flex flex-col w-full h-screen dark:bg-black overflow-x-hidden gap-4">
      <Header />

      <div className="relative flex flex-col w-full max-w-4xl mx-auto px-4 gap-4">
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="combinations">Combinations</TabsTrigger>
          </TabsList>

          <Suspense fallback={<div>Loading...</div>}>
            <TabsContent value="bookings" className="w-full">
              <Bookings />
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
