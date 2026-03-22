"use client"

import { useState, useMemo, use } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  formatDate,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

type props = {
  className?: string
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const EventCalender = ({ className }: props) => {
  const router = useRouter()
  const [currectDate, setCurrentDate] = useState(new Date())

  const calenderDays = useMemo(() => {
    const monthStart = startOfMonth(currectDate)
    const monthEnd = endOfMonth(currectDate)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    })
  }, [currectDate])
  // console.log(currectDate, formatDate(currectDate, "MMMM yyyy dd HH:mm:ss"))

  return (
    <div className={cn(className, "w-full p-2")}>
      {/* Event Header */}
      <div className="mb-4 flex items-center justify-between border-b p-4">
        <div className="text-2xl">{formatDate(currectDate, "MMMM yyyy")}</div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate((prev) => subMonths(prev, 1))}
          >
            <ChevronLeft />
          </Button>
          <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentDate((prev) => addMonths(prev, 1))}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="w-full rounded-md px-6">
        {/* Day Header */}
        <div className="grid grid-cols-7 gap-3">
          {weekDays.map((day) => (
            <div key={day} className="flex h-12 items-center justify-center">
              {day}
            </div>
          ))}
        </div>
        {/* Calender Days */}
        <div className="grid grid-cols-7 gap-3">
          {calenderDays.map((day) => {
            const isCurrentMonth = isSameMonth(day, currectDate)
            const today = isToday(day)

            return (
              <div
                key={day.toISOString()}
                className={cn(
                  "group h-36 p-3 cursor-pointer rounded-md border border-transparent bg-secondary/50 transition-all trasition-duration-300",
                  "flex flex-col items-start justify-start",
                  isCurrentMonth
                    ? "shadow hover:border-primary/30 hover:bg-secondary"
                    : "pointer-events-none opacity-60 shadow-none"
                  // today && "bg-primary text-primary-foreground"
                )}
                onClick={() =>
                  router.push(`/diary/create?${formatDate(day, "yyyy-MM-dd")}_${"1"}`)
                }
              >
                <div
                  className={cn(
                    "",
                    today &&
                      "rounded-full px-1.5 font-bold text-blue-500 ring ring-blue-500"
                  )}
                >
                  {formatDate(day, "d")}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventCalender
