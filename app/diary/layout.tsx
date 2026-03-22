import Sidebar from "@/components/Sidebar"
import React from "react"

const DairyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="flex ">
      <Sidebar />
      {children}
    </div>
  )
}

export default DairyLayout
