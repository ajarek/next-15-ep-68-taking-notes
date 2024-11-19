
import { Input } from "@/components/ui/input"
import notesData from "@/data/notes.json"
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
import { useParams } from 'next/navigation'

export default function Home({searchParams}:{searchParams:{id:string}}) {
 
  return (
    <div className='min-h-screen ml-[200px] flex flex-col  '>
      <div className=' h-16 flex  items-center justify-between px-4 border-b-2'>
        <h1 className='min-w-64 flex items-center gap-2 text-2xl font-bold text-primary italic'>
          All Notes
        </h1>
        <Input className='w-96' placeholder='Search' />
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr] p-2">
         <div className="flex flex-col gap-2">
          {notesData.map((note) => (
           <Card key={note.id}>
            <Link href={`/?id=${note.id}`}>
           <CardHeader>
             <CardTitle>{note.title}</CardTitle>
             <CardDescription>{note.tags.map((nt, index)=>(<p key={index}>{nt}</p>))}</CardDescription>
           </CardHeader>
           <CardFooter>
             <p>{note.createdAt}</p>
           </CardFooter>
           </Link>
         </Card>
          ))}
         </div>
         <div className="bg-blue-300">
          <NoteId id={searchParams.id}/>

         </div>
         <div className="bg-green-300">lol</div>
      </div>
    </div>
  )
}
{/* <div key={note.id}>
<h2>{note.title}</h2>
<div></div>
<div></div>
</div> */}