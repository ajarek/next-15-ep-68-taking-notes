import { LogOut } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const LogoutBtn = () => {
  return (
    <Link
      className={`${buttonVariants({
        variant: "destructive",
      })} h-7 text-[18px] w-full`}
      href={"/api/auth/signout"}
      aria-label='Login'
    >
      <LogOut /> Logout
    </Link>
  )
}

export default LogoutBtn
