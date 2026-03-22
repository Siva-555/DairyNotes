"use client"
import TiptapEditor from "@/components/editor/TiptapEditor"
import { useState } from "react"

const Page = () => {

  const [content, setContent] = useState("")

  const handleUpdate = (newContent: string) => {
    console.log(newContent);
    setContent(newContent)
  }

  return (
    <div className="w-full">
      <TiptapEditor
        content={content}
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default Page
