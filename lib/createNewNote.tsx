"use server"
import type { Note } from "@/types/typeNote"
import { fetchNotes } from "./fetch"
import { redirect } from "next/navigation"
import fs from "fs/promises"
import path from "path"

export const createNewNote = async (formData: FormData) => {
  const notes = (await fetchNotes()) as Note[]
  const title = formData.get("title")
  const tags = formData.get("tags")
  const title1 = formData.get("title1")
  const content1 = formData.get("content1")
  const title2 = formData.get("title2")
  const content2 = formData.get("content2")
  const title3 = formData.get("title3")
  const content3 = formData.get("content3")

  notes.push({
    id: notes.length + 1,
    title: title as string,
    tags:
      typeof tags === "string" ? tags.split(",").map((tag) => tag.trim()) : [],
    content1: {
      title: title1 as string,
      content: content1 as string,
    },
    content2: {
      title: title2 as string,
      content: content2 as string,
    },
    content3: {
      title: title3 as string,
      content: content3 as string,
    },

    createdAt: new Date().toLocaleDateString("sv-SE"),
    updatedAt: new Date().toLocaleDateString("sv-SE"),
    isArchive: false,
  })

  await fs.writeFile(path.resolve(process.cwd(), "data/notes.json"), JSON.stringify(notes, null, 2))
  redirect("/")
}
