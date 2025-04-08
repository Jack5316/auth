"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface BrowserSafeBodyProps {
  children: React.ReactNode;
}

export default function BrowserSafeBody({ children }: BrowserSafeBodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Optional: You could also actively remove known problematic attributes
    // that browser extensions add to the body tag
    const cleanup = () => {
      const bodyElement = document.body;
      if (bodyElement) {
        // List of attributes known to be added by browser extensions
        const extensionAttributes = [
          'data-scholarcy-content-script-executed',
          'data-new-gr-c-s-check-loaded',
          'data-gr-ext-installed',
          'youmind-sidebar-open'
        ];
        
        // No need to remove them as React will handle the client UI
        // This is just for reference of known problematic attributes
      }
    };
    
    // Run cleanup once on mount
    cleanup();
    
    return () => {
      // Cleanup if needed when component unmounts
    };
  }, []);

  // Render the children directly - the body element itself is already defined in the HTML structure
  // The suppressHydrationWarning is a React attribute that tells React to ignore hydration mismatches for this element
  return (
    <body className={inter.className} suppressHydrationWarning>
      {mounted ? (
        // After client-side rendering takes over, render children normally
        <>{children}</>
      ) : (
        // During server-rendering and initial hydration
        <>{children}</>
      )}
    </body>
  );
}
