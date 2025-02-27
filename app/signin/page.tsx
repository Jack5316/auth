import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignInForm from "@/components/auth/signin-form";

export default async function SignInPage() {
  const session = await auth();
  
  // Redirect to homepage if already signed in
  if (session) {
    redirect("/");
  }
  
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
          <p className="mt-2 text-sm text-gray-600">
            Use your Google account to sign in
          </p>
        </div>
        
        <SignInForm />
      </div>
    </div>
  );
}
