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
    <header className="fixed top-0 z-50 w-full px-6 pt-6 pointer-events-none">
      <div className="container mx-auto max-w-7xl h-24 px-8 flex items-center justify-between gap-6 bg-white/90 backdrop-blur-2xl border-4 border-primary shadow-[8px_8px_0px_0px_rgba(27,77,46,1)] rounded-[3rem] pointer-events-auto transition-transform hover:translate-y-[-2px]">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-12 w-12 rounded-2xl hover:bg-secondary">
                <Menu className="h-8 w-8 text-primary" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[450px] border-r-8 border-primary p-12 bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-black text-6xl font-headline italic tracking-tighter text-primary">TOPTIER</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8 mt-20">
                {['Home', 'Men', 'Women', 'Kids', 'Accessories'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/shop?cat=${item}`} 
                    className="text-5xl font-black hover:text-primary transition-colors uppercase italic tracking-tighter border-b-4 border-transparent hover:border-primary pb-2 w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl font-black tracking-tighter text-primary font-headline italic">TOPTIER</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-black uppercase tracking-[0.2em] text-foreground/70">
          <Link href="/shop?cat=Men" className="hover:text-primary transition-colors hover:scale-110">Men</Link>
          <Link href="/shop?cat=Women" className="hover:text-primary transition-colors hover:scale-110">Women</Link>
          <Link href="/shop?cat=Kids" className="hover:text-primary transition-colors hover:scale-110">Kids</Link>
          <Link href="/shop?cat=Accessories" className="hover:text-primary transition-colors hover:scale-110">Accessories</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block w-full max-w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/50" />
            <Input
              type="search"
              placeholder="Find vintage..."
              className="pl-12 bg-secondary border-none rounded-[2rem] focus-visible:ring-4 focus-visible:ring-primary/20 h-14 text-lg font-medium"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-14 w-14 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
              <Heart className="h-7 w-7" />
            </Button>
            <Button variant="ghost" size="icon" className="relative h-14 w-14 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
              <ShoppingBag className="h-7 w-7" />
              <span className="absolute top-1 right-1 h-6 w-6 bg-primary text-white rounded-full text-xs flex items-center justify-center font-black border-4 border-white">
                3
              </span>
            </Button>
          </div>
          
          <Button className="hidden sm:flex bg-primary text-white font-black rounded-[2rem] h-14 px-8 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase tracking-widest">
            SELL NOW
          </Button>
        </div>
      </div>
    </header>
  );
}