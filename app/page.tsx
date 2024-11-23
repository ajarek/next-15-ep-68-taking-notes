import  {Search}  from "@/components/Search"
import {
  Card,
  CardContent,
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
import { fetchNotes } from '@/lib/fetch'

export default async function Home({
  searchParams,
}: {
  searchParams: { id: string; tag: string; query: string }
}) {
  const session = await auth()
  const notesData= await fetchNotes()
  
  return (
    <>
      {session ? (
        <div className='min-h-screen max-lg:ml-0 ml-[200px] flex flex-col  '>
          <div className=' h-16 flex  items-center justify-between px-4 border-b-2'>
            <h1 className='min-w-64 flex items-center gap-2 text-2xl font-bold text-primary italic'>
              All Notes
            </h1>
            <Search />
          </div>
          <div className='grid grid-cols-[1fr_3fr] max-lg:grid-cols-1 p-2'>
            <div className='flex flex-col gap-2'>
              <Link href='/add-note'  className={`${buttonVariants({
            variant: 'default',
          })} h-7 text-[18px] w-full`}>
                <Plus />
                Create New Note
              </Link>
              <div className="max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-2 max-lg:gap-2">
                {notesData
                  .filter((note) => {
                    const searchQuery = searchParams?.query?.toUpperCase() || '';
                    const noteTitle = note?.title?.toUpperCase() || '';
                    return noteTitle.includes(searchQuery) || !searchParams?.query;
                  })
                  .filter(
                    (note) =>
                      note?.tags?.includes(searchParams?.tag) || !searchParams?.tag
                  )
                  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
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
                        <CardContent>
                        <p>{note.createdAt}</p>
                        </CardContent>
                        <CardFooter>
                          <p className="text-red-500">{note.isArchive && "Note Archived"}</p>
                        </CardFooter>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>

            <div className=''>
              <NoteId id={searchParams.id} />
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
