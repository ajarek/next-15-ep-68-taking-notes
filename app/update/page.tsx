import React from "react"
import FormUpdateNote from "@/components/FormUpdateNote"
import { fetchNotes } from "@/lib/fetch"
import { Note } from "@/types/typeNote"

const Update = async ({ searchParams }: { searchParams: { id: string } }) => {
  const notes = await fetchNotes()
  const note = notes.find((nt) => nt.id === +searchParams.id)

  return (
    <div className='min-h-screen max-lg:ml-0 ml-[200px] flex flex-col p-8 gap-4'>
      <h1 className='text-2xl text-center font-bold'>Update Note</h1>
      <FormUpdateNote note={note || ({} as Note)} />
    </div>
  )
}

export default Update
