'use client'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ButtonUpdate = ({id}: {id: number}) => {
    const router = useRouter()
  return (
    <Button  className="w-full" onClick={() => router.push(`/update?id=${id}`)}>
        <RefreshCcw />
        Update Note
      </Button>
  )
}

export default ButtonUpdate