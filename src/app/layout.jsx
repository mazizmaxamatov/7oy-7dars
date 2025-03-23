import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyProfile | Manage your identity",
  description: "View and customize your profile details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-gray-50 text-gray-900")}>
        <div className="max-w-5xl mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
