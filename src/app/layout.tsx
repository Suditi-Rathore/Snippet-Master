"use client"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ContextProvider } from "@/context/UserContext";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ContextProvider>
        <html lang="en">
          <head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            />
          </head>
          <body>{children}</body>
        </html>
      </ContextProvider>
    </ClerkProvider>
  );
}
