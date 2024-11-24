'use client'
import Form from 'next/form'
import { updateNote } from '@/lib/updateNote'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Note } from '@/types/typeNote'

const FormUpdateNote = ({note}: {note: Note}) => {
  const ref = useRef<HTMLFormElement>(null)
  
  return (
    <Form
      action={async (formData) => {
        await updateNote(formData)
        ref.current?.reset()
      }}
      className='w-full flex flex-col gap-4'
    > 
       <input type='hidden' name='id' value={note?.id}/>
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Title</Label>
        <Input name='title' defaultValue={note?.title} required/>
        
      </div>
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Tags</Label>
        <Input name='tags' defaultValue={note?.tags} required/>
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-1</Label>
        <Input name='title1' defaultValue={note?.content1.title} />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-1</Label>
        <Input name='content1' defaultValue={note?.content1.content}/>
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-2</Label>
        <Input name='title2' defaultValue={note?.content2.title} />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-2</Label>
        <Input name='content2' defaultValue={note?.content2.content} />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-3</Label>
        <Input name='title3' defaultValue={note?.content3.title} />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-3</Label>
        <Input name='content3' defaultValue={note?.content3.content} />
      </div>
      

      <Button type='submit'>Update Note</Button>
    </Form>
  )
}

export default FormUpdateNote