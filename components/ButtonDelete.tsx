"use client"
import Form from "next/form"
import { Button } from "@/components/ui/button"
import { deleteNoteId } from "@/lib/deleteNoteId"
import { Trash2 } from "lucide-react"

const ButtonDelete = ({ id }: { id: number }) => {
  return (
    <Form
      action={async (formData) => {
        await deleteNoteId(formData)
      }}
      className='w-full flex flex-col  items-start gap-4'
    >
      <input type='hidden' name='id' value={id} />

      <Button variant={"destructive"} className="w-full">
        <Trash2 />
        Delete Note
      </Button>
    </Form>
  )
}
export default ButtonDelete
