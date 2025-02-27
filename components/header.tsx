import Link from "next/link";
import { auth } from "@/auth";
import UserNav from "./user-nav";

export default async function Header() {
  const session = await auth();
  
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center font-bold">
          Minimus
        </Link>
        
        <nav className="flex items-center gap-4">
          <Link href="/api-example" className="text-sm">
            API Example
          </Link>
          
          {session ? (
            <UserNav user={session.user} />
          ) : (
            <Link 
              href="/signin" 
              className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
