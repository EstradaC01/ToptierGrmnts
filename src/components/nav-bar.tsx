
"use client";

import React from 'react';
import Link from 'next/link';
import { Search, MessageCircle, Menu, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-headline text-primary">TopTier Thrift</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">Home</Link>
                <Link href="/shop?cat=Men" className="text-lg font-medium hover:text-primary transition-colors">Men</Link>
                <Link href="/shop?cat=Women" className="text-lg font-medium hover:text-primary transition-colors">Women</Link>
                <Link href="/shop?cat=Kids" className="text-lg font-medium hover:text-primary transition-colors">Kids</Link>
                <Link href="/shop?cat=Accessories" className="text-lg font-medium hover:text-primary transition-colors">Accessories</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-primary font-headline">TOPTIER</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/shop?cat=Men" className="hover:text-primary transition-colors">Men</Link>
          <Link href="/shop?cat=Women" className="hover:text-primary transition-colors">Women</Link>
          <Link href="/shop?cat=Kids" className="hover:text-primary transition-colors">Kids</Link>
          <Link href="/shop?cat=Accessories" className="hover:text-primary transition-colors">Accessories</Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <div className="relative hidden sm:block w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search items..."
              className="pl-8 bg-muted/50 border-none focus-visible:ring-primary"
            />
          </div>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          <Button className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] border-none text-white">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
