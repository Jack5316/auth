"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleSignOut}
      disabled={isLoading}
      variant="destructive"
    >
      {isLoading ? "Signing out..." : "Sign out"}
    </Button>
  );
}
