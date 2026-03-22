"use client"
import { cn } from "@/lib/utils"
import { CalendarFold, FileText, Notebook } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Items = [
  {
    name: "Diary",
    href: "/diary",
    icon: CalendarFold
  },
  {
    name: "Notes",
    href: "/notes",
    icon: FileText
  },
]
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="flex h-screen w-60 flex-col border-r p-4">
      <header className="flex w-full items-center justify-start gap-2 border-b p-2">
        <Notebook />
        <h1 className="text-2xl font-bold">Dairy Notes</h1>
      </header>
      <aside className="w-full">
        <nav>
          <ul className="mt-4 flex flex-col gap-2">
            {Items.map((item) => (
              <Link
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-2 hover:bg-secondary flex items-center",
                  item.href === pathname ? "bg-secondary" : ""
                )}
                key={item.name}
              >
                <item.icon className="mr-2 inline-block size-5" />
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
