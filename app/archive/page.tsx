import { Search } from "@/components/Search"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import NoteId from "@/components/NoteId"
import { buttonVariants } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { auth } from "@/app/api/auth/auth"
import StartPage from "@/components/StartPage"
import { fetchNotes } from "@/lib/fetch"

export default async function Archive({
  searchParams,
}: {
  searchParams: { id: string; tag: string; query: string }
}) {
  const { id, tag, query } = await searchParams
  const notesData = await fetchNotes()

  const tagsArchive = notesData
    .filter((note) => note.isArchive === true)
    .flat(1)
  const session = await auth()
  return (
    <>
      {session ? (
        <div className='min-h-screen max-lg:ml-0 ml-[200px] flex flex-col  '>
          <div className=' h-16 flex  items-center justify-between px-4 border-b-2'>
            <h1 className='min-w-64 flex items-center gap-2 text-2xl font-bold text-primary italic'>
              Archive Notes
            </h1>
            <Search />
          </div>
          <div className='grid grid-cols-[1fr_3fr] p-2'>
            <div className='flex flex-col gap-2'>
              <Link
                href='/add-note'
                className={`${buttonVariants({
                  variant: "default",
                })} h-7 text-[18px] w-full`}
              >
                <Plus />
                Create New Note
              </Link>
              {tagsArchive
                .filter((note) => {
                  const searchQuery = query?.toUpperCase() || ""
                  const noteTitle = note?.title?.toUpperCase() || ""
                  return noteTitle.includes(searchQuery) || !query
                })
                .filter((note) => note.tags.includes(tag) || !tag)
                .sort(
                  (a, b) =>
                    new Date(b.updatedAt).getTime() -
                    new Date(a.updatedAt).getTime()
                )
                .map((note) => (
                  <Card key={note.id}>
                    <Link href={`/?id=${note.id}`}>
                      <CardHeader>
                        <CardTitle>{note.title}</CardTitle>
                        <CardDescription>
                          {note.tags.map((nt, index) => (
                            <p key={index}>{nt}</p>
                          ))}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <p>{note.updatedAt}</p>
                      </CardFooter>
                    </Link>
                  </Card>
                ))}
            </div>

            <div className=''>
              <NoteId id={id} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <StartPage />
        </>
      )}
    </>
  )
}
