"use server"
import fs from "fs/promises"
import type { Note } from "@/types/typeNote"
import path from "path"

export const fetchNotes = async () => {
  const notesData = await fs.readFile(
    path.resolve(process.cwd(), "data/notes.json"),
    "utf8"
  )
  return JSON.parse(notesData) as Note[]
}
