"use server"
import type { Note } from "@/types/typeNote"
import { fetchNotes } from "./fetch"
import { redirect } from "next/navigation"
import fs from "fs/promises"

export const updateNote = async (formData: FormData) => {
  const notes = (await fetchNotes()) as Note[]

  const id = formData?.get("id")
  if (!id) {
    throw new Error("Note ID is required")
  }
  const idNumber = +id

  const title = formData?.get("title")
  const tags = formData?.get("tags")
  const title1 = formData?.get("title1")
  const content1 = formData?.get("content1")
  const title2 = formData?.get("title2")
  const content2 = formData?.get("content2")
  const title3 = formData?.get("title3")
  const content3 = formData?.get("content3")

  const note = notes.find((note) => note?.id === idNumber)

  const newNote = {
    id: idNumber,
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

    createdAt: note?.createdAt,
    updatedAt: new Date().toLocaleDateString("sv-SE"),
    isArchive: false,
  }

  const newNotes = notes.map((note) => {
    if (note?.id === idNumber) {
      return newNote
    }
    return note
  })

  await fs.writeFile("data/notes.json", JSON.stringify(newNotes, null, 2))
  redirect("/")
}
