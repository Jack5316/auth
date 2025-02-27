import Link from "next/link";
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({ href, children, className = "" }: CustomLinkProps) {
  const isExternal = href.startsWith("http");
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`text-blue-600 hover:underline ${className}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link 
      href={href} 
      className={`text-blue-600 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}
