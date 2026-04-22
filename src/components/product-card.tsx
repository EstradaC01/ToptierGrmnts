"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingBag, Eye, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  condition: string;
  size: string;
}

export function ProductCard({ id, name, price, category, imageUrl, imageHint, condition, size }: ProductCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden border-none shadow-none bg-transparent">
          <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-secondary border-4 border-black transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Badge className="bg-black text-white hover:bg-black border-none font-black px-3 py-1 text-[9px] uppercase tracking-widest">
                {category}
              </Badge>
              <Badge className="bg-primary text-white hover:bg-primary border-none font-black px-3 py-1 text-[9px] uppercase tracking-widest">
                {condition}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-6 px-0 pb-4">
            <h3 className="font-black text-2xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors mb-2 italic">{name}</h3>
            <div className="flex items-center justify-between w-full">
              <p className="text-black font-black text-3xl tracking-tighter">₱{price.toLocaleString()}</p>
              <span className="text-[10px] font-black uppercase text-black/40 bg-black/5 px-3 py-1 border-2 border-black">{size}</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-white border-8 border-black rounded-none shadow-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto h-[500px] md:h-full bg-secondary">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
            <div className="absolute top-8 left-8 bg-black text-white px-6 py-2 font-black italic tracking-widest uppercase">
              ARCHIVE PIECE
            </div>
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center bg-white border-l-8 border-black">
            <DialogHeader className="p-0 text-left mb-12">
              <div className="flex gap-2 mb-8">
                <Badge className="bg-primary text-white hover:bg-primary border-none uppercase font-black px-6 py-2 text-[12px] tracking-widest">
                  {category}
                </Badge>
                <Badge variant="outline" className="border-4 border-black font-black px-6 py-2 text-[12px] tracking-widest uppercase text-black">
                  {condition}
                </Badge>
              </div>
              <DialogTitle className="text-6xl md:text-8xl font-black font-headline text-black mb-6 tracking-tighter leading-[0.8] uppercase italic">
                {name}
              </DialogTitle>
              <div className="text-5xl font-black text-primary tracking-tighter">
                ₱{price.toLocaleString()}
              </div>
            </DialogHeader>

            <div className="space-y-8 flex-1">
              <div className="grid grid-cols-2 gap-0 border-4 border-black">
                <div className="p-6 border-r-4 border-black bg-secondary/50">
                  <span className="text-[10px] font-black text-black/40 block mb-2 uppercase tracking-[0.3em]">TAGGED SIZE</span>
                  <span className="font-black text-3xl text-black leading-none">{size}</span>
                </div>
                <div className="p-6 bg-white">
                  <span className="text-[10px] font-black text-black/40 block mb-2 uppercase tracking-[0.3em]">AUTHENTICITY</span>
                  <span className="font-black text-2xl text-primary leading-none italic">VERIFIED</span>
                </div>
              </div>

              <div className="text-sm font-bold leading-snug text-black/70 uppercase tracking-tight max-w-md">
                <p>AUTHENTIC CURATED GARMENT FROM THE VAULT. DEEP CLEANED, INSPECTED, AND DOCUMENTED. 1-OF-1 ARCHIVE REPRESENTATION.</p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full bg-black hover:bg-black/90 text-white py-10 text-xl font-black rounded-none shadow-pop transition-transform hover:-translate-y-1">
                <ShoppingBag className="h-6 w-6 mr-3" />
                SECURE PIECE
              </Button>
              <Button variant="outline" className="w-full py-10 text-xl font-black rounded-none border-4 border-black text-black hover:bg-black hover:text-white transition-all">
                <MessageCircle className="h-6 w-6 mr-3" />
                ENQUIRE
              </Button>
            </div>
            
            <p className="text-[10px] font-black text-center text-black/20 mt-12 uppercase tracking-[0.6em]">
              PREMIUM GLOBAL SHIPPING INCLUDED
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
