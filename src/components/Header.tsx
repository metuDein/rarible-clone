'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, Wallet } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold">Rarible</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/create" className="text-foreground hover:text-primary transition-colors">
              Create
            </Link>
            <Link href="/explore" className="text-foreground hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="/sell" className="text-foreground hover:text-primary transition-colors">
              Sell
            </Link>
            <Link href="/drops" className="text-foreground hover:text-primary transition-colors">
              <span className="flex items-center space-x-1">
                <span>Drops</span>
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">NEW</span>
              </span>
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items, collections, and accounts"
                className="pl-10 w-80 bg-input border-border"
              />
            </div>

            {/* User Actions */}
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>

            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex items-center justify-around">
          <Link href="/create" className="text-sm text-foreground hover:text-primary">Create</Link>
          <Link href="/explore" className="text-sm text-foreground hover:text-primary">Explore</Link>
          <Link href="/sell" className="text-sm text-foreground hover:text-primary">Sell</Link>
          <Link href="/drops" className="text-sm text-foreground hover:text-primary">Drops</Link>
        </nav>
      </div>
    </header>
  )
}
