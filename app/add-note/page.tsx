import FormAddNote from '@/components/FormAddNote'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const AddNote = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  return (
    <div className='min-h-screen max-lg:ml-0 ml-[200px] flex flex-col p-8 gap-4'>
        <h1 className='text-2xl text-center font-bold'>Create New Note</h1>
      <FormAddNote />
    </div>
  )
}

export default AddNote