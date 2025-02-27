"use client";

import { useEffect, useState } from "react";

interface BrowserExtensionSafeProps {
  children: React.ReactNode;
}

export default function BrowserExtensionSafe({ children }: BrowserExtensionSafeProps) {
  // State to track client-side hydration
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after hydration
    setMounted(true);
  }, []);

  // Special props to tell React to ignore hydration mismatches for this component
  // This is specifically designed for cases where the DOM might be modified by browser extensions
  return (
    <div suppressHydrationWarning>
      {/*
        When not mounted yet, render children normally for server-side rendering
        After mounting on client, re-render children to make React happy with the current DOM state
      */}
      {mounted ? <div>{children}</div> : children}
    </div>
  );
}
