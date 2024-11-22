'use server'
import fs from 'fs/promises'
import type { Note } from '@/types/typeNote'

export const fetchNotes = async () => {
  const notesData = await fs.readFile('data/notes.json', 'utf8')
  return JSON.parse(notesData) as Note[]
}
