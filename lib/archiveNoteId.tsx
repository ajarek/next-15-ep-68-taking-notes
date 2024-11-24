"use server"
import type { Note } from "@/types/typeNote"
import { fetchNotes } from "./fetch"
import { redirect } from "next/navigation"
import fs from "fs/promises"

export const archiveNoteId = async (formData: FormData) => {
  const notes = (await fetchNotes()) as Note[]
  const id = formData.get("id")

  if (id) {
    const newNotes = notes.map((note: Note) => {
      if (note?.id === +id) {
        return { ...note, isArchive: !note.isArchive }
      }
      return note
    })
    await fs.writeFile("data/notes.json", JSON.stringify(newNotes, null, 2))
    redirect("/?id=" + id)
  }
}
