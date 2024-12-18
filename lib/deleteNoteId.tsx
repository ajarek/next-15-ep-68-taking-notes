"use server"
import type { Note } from "@/types/typeNote"
import { fetchNotes } from "./fetch"
import { redirect } from "next/navigation"
import fs from "fs/promises"
import path from "path"

export const deleteNoteId = async (formData: FormData) => {
  const notes = (await fetchNotes()) as Note[]
  const id = formData.get("id")

  if (id) {
    const newNotes = notes.filter((note: Note) => note?.id !== +id)
    await fs.writeFile(path.resolve(process.cwd(), "data/notes.json"), JSON.stringify(newNotes, null, 2))
    redirect("/")
  }
}
