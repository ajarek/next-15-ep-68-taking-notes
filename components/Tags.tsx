import { Tag } from "lucide-react"
import notesData from "@/data/notes.json"
const tags= notesData.map((note) => note.tags).flat(1)
console.log(tags)
const Tags = () => {
  return (
    <div className="flex flex-col w-full  justify-center items-start gap-2 ">
      <h1 className={`  text-[18px] hover:text-primary focus:text-primary `}>
         Tags :
      </h1>
      <div className="flex flex-col gap-2">
       {[...new Set(tags)].map((tag,index)=>(<div key={index} className="flex items-center gap-2"><Tag/>{tag} </div>))}
      </div>
    </div>
  )
}

export default Tags
