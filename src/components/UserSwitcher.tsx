import { useUserCtx } from "@/hooks/useUserCtx"
import { getUserAvatar } from "@/utils/getUserAvatar"
import React, { memo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const users = [
  "Oliver",
  "Shad",
  "John",
  "Vivian",
  "Easton",
  "Sawyer",
  "Sarah",
  "Christopher",
  "Eliza",
  "George",
]

const UserSwitcher: React.FC = () => {
  const [{ user }, { setUser }] = useUserCtx()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex flex-col items-center hover:scale-125 active:scale-90 transition-transform">
          <Avatar className="h-8 w-8 bg-slate-200 dark:bg-slate-700">
            <AvatarImage src={getUserAvatar(user)} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid grid-cols-4 gap-4">
          {users.map((user) => (
            <button
              key={user}
              className="flex flex-col items-center hover:scale-125 active:scale-90 transition-transform"
              onClick={() => setUser(user)}
            >
              <Avatar className="h-8 w-8 md:h-12 md:w-12 bg-slate-200 dark:bg-slate-700">
                <AvatarImage src={getUserAvatar(user)} alt={user} />
                <AvatarFallback>{user}</AvatarFallback>
              </Avatar>
              <span className="block text-center text-xs mt-1">{user}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default memo(UserSwitcher)
