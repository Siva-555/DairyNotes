import Sidebar from "@/components/Sidebar"
import React from "react"

const NotesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <div><Sidebar />{children}</div>
}

export default NotesLayout
