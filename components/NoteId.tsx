import { CalendarDays, Tag } from "lucide-react"
import { fetchNotes } from "@/lib/fetch"
import ButtonDelete from "./ButtonDelete"
import ButtonArchive from "./ButtonArchive"
import ButtonUpdate from "./ButtonUpdate"

const NoteId = async ({ id }: { id: string }) => {
  const notesData = await fetchNotes()
  const note = notesData.find((note) => note.id === +id)
  if (!id) {
    return (
      <div className='text-xl text-center font-bold mt-12'>Select a note</div>
    )
  }
  return (
    <div className='min-h-[calc(100vh-64px)]  grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 p-4'>
      <div className='flex flex-col gap-4'>
        {note?.isArchive && (
          <h1 className='text-2xl text-gray-400 font-bold uppercase '>
            Archived Note
          </h1>
        )}
        <h1 className='text-xl font-bold'>{note?.title}</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <Tag /> Tags:
            {note?.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <CalendarDays /> Added {note?.createdAt}
          </div>
          <div className='flex items-center gap-2'>
            <CalendarDays /> Last edited {note?.updatedAt}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <h2 className='font-semibold'>{note?.content1.title}</h2>
            <p>{note?.content1.content}</p>
          </div>
          <div>
            <h2 className='font-semibold'>{note?.content2.title}</h2>
            <p>{note?.content2.content}</p>
          </div>
          <div>
            <h2 className='font-semibold'>{note?.content3.title}</h2>
            <p>{note?.content3.content}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 border-l-2 max-lg:border-none p-4'>
        <ButtonArchive id={+id} />
        <ButtonUpdate id={+id} />
        <ButtonDelete id={+id} />
      </div>
    </div>
  )
}

export default NoteId
