import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import SignOutButton from "@/components/auth/signout-button";

export default async function SignOutPage() {
  const session = await auth();
  
  // Redirect to sign in page if not signed in
  if (!session) {
    redirect("/signin");
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign out</h1>
          <p className="mt-2 text-sm text-gray-600">
            Are you sure you want to sign out?
          </p>
        </div>
        
        <div className="flex justify-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
