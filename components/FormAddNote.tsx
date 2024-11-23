'use client'
import Form from 'next/form'
import { createNewNote } from '@/lib/createNewNote'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const FormAddNote = () => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <Form
      action={async (formData) => {
        await createNewNote(formData)
        ref.current?.reset()
      }}
      className='w-full flex flex-col gap-4'
    >
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Title</Label>
        <Input name='title' required/>
      </div>
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Tags</Label>
        <Input name='tags' required/>
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-1</Label>
        <Input name='title1' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-1</Label>
        <Input name='content1' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-2</Label>
        <Input name='title2' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-2</Label>
        <Input name='content2' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Title-3</Label>
        <Input name='title3' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Content-3</Label>
        <Input name='content3' />
      </div>
      

      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default FormAddNote