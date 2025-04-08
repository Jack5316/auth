"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <Button 
        onClick={handleSignIn}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2"
      >
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </Button>
    </div>
  );
}
