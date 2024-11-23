"use client"
import Form from "next/form"
import { Button } from "@/components/ui/button"
import { archiveNoteId } from "@/lib/archiveNoteId"
import { Archive } from "lucide-react"

const ButtonArchive = ({ id }: { id: number }) => {
  return (
    <Form
      action={async (formData) => {
        await archiveNoteId(formData)
      }}
      className='w-full flex flex-col  items-start gap-4'
    >
      <input type='hidden' name='id' value={id} />

      <Button className="w-full">
        <Archive />
        Toggle Archiving
      </Button>
    </Form>
  )
}
export default ButtonArchive
