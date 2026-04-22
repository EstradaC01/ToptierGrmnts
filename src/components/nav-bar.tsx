"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Menu, ShoppingBag, User } from 'lucide-react';
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
  const navItems = [
    { name: 'LUXURY', cat: 'LUXURY' },
    { name: 'STREETWEAR', cat: 'STREETWEAR' },
    { name: 'SPORTSWEAR', cat: 'SPORTSWEAR' },
    { name: 'FORMAL WEAR', cat: 'FORMAL WEAR' },
    { name: 'GARMENTS & BAG', cat: 'GARMENTS & BAG' }
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 pointer-events-none">
      <div className="container mx-auto max-w-7xl h-20 px-8 flex items-center justify-between gap-6 bg-background border border-primary/20 shadow-luxury pointer-events-auto">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[400px] border-r border-primary/10 p-12 bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-black text-5xl font-headline italic tracking-tighter text-primary">TOPTIER</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8 mt-20">
                <Link href="/shop" className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter border-b-2 border-transparent hover:border-primary pb-2 w-fit">
                  All Pieces
                </Link>
                {navItems.map((item) => (
                  <Link 
                    key={item.cat}
                    href={`/shop?cat=${item.cat}`} 
                    className="text-4xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter border-b-2 border-transparent hover:border-primary pb-2 w-fit"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-primary font-headline italic">TOPTIER</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50">
          <Link href="/shop" className="hover:text-primary transition-colors">The Vault</Link>
          {navItems.map((item) => (
            <Link key={item.cat} href={`/shop?cat=${item.cat}`} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block w-full max-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
            <Input
              type="search"
              placeholder="SEARCH VAULT..."
              className="pl-10 bg-muted/10 border-none rounded-none h-10 text-[10px] font-black uppercase tracking-widest focus-visible:ring-1 focus-visible:ring-primary/20"
            />
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-primary/5">
              <User className="h-5 w-5 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 hover:bg-primary/5">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-[8px] flex items-center justify-center font-black">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
