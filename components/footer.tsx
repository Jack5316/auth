import CustomLink from "./custom-link"
import packageJSON from "next-auth/package.json"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Minimus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
