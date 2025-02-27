"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

// This wrapper component ensures content is only rendered on the client side
export function ClientOnly({ children }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side and during first client render
  }

  return <>{children}</>;
}

export default function ClientOnlyComponent() {
  const [timestamp, setTimestamp] = useState<string>("Loading...");
  
  useEffect(() => {
    // Only update timestamp after component is mounted on client
    setTimestamp(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <p>Client rendered timestamp: {timestamp}</p>
    </div>
  );
}
