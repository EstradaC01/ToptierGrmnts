"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Menu, ShoppingBag, Heart } from 'lucide-react';
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
    <header className="fixed top-0 z-50 w-full px-4 pt-4 pointer-events-none">
      <div className="container mx-auto max-w-7xl h-20 px-6 flex items-center justify-between gap-4 bg-white/80 backdrop-blur-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-3xl pointer-events-auto">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] border-none">
              <SheetHeader>
                <SheetTitle className="text-left font-black text-4xl font-headline italic tracking-tighter">TOPTIER</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-12">
                <Link href="/" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter">Home</Link>
                <Link href="/shop?cat=Men" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter">Men</Link>
                <Link href="/shop?cat=Women" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter">Women</Link>
                <Link href="/shop?cat=Kids" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter">Kids</Link>
                <Link href="/shop?cat=Accessories" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter">Accessories</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-black font-headline italic">TOPTIER</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-widest">
          <Link href="/shop?cat=Men" className="hover:text-primary transition-colors">Men</Link>
          <Link href="/shop?cat=Women" className="hover:text-primary transition-colors">Women</Link>
          <Link href="/shop?cat=Kids" className="hover:text-primary transition-colors">Kids</Link>
          <Link href="/shop?cat=Accessories" className="hover:text-primary transition-colors">Accessories</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden lg:block w-full max-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-secondary/50 border-none rounded-2xl focus-visible:ring-primary h-11"
            />
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-2xl hover:bg-secondary">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-2xl hover:bg-secondary">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-2 right-2 h-4 w-4 bg-accent text-white rounded-full text-[10px] flex items-center justify-center font-bold border-2 border-white">
                3
              </span>
            </Button>
          </div>
          
          <Button className="hidden sm:flex bg-primary text-white font-black rounded-2xl h-12 px-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
            SELL NOW
          </Button>
        </div>
      </div>
    </header>
  );
}