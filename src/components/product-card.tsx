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
          <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-white border border-primary/5 shadow-sm group-hover:shadow-luxury transition-all duration-500">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Badge className="bg-white text-black hover:bg-white border-none font-black px-3 py-1 text-[8px] uppercase tracking-[0.2em]">
                {category}
              </Badge>
              <Badge className="bg-primary text-white hover:bg-primary border-none font-black px-3 py-1 text-[8px] uppercase tracking-[0.2em]">
                {condition}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <Button className="flex-1 bg-white text-black hover:bg-white border border-black h-10 text-[10px] font-black uppercase tracking-widest rounded-none">
                <Eye className="h-4 w-4 mr-2" /> QUICK VIEW
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-6 px-0 pb-4">
            <h3 className="font-black text-xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors mb-2">{name}</h3>
            <div className="flex items-center justify-between w-full">
              <p className="text-primary font-black text-2xl tracking-tighter">₱{price.toLocaleString()}</p>
              <span className="text-[10px] font-black uppercase text-foreground/40 bg-secondary/50 px-3 py-1 border border-primary/5">{size}</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background border border-primary/10 rounded-none shadow-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto h-[500px] md:h-full bg-white">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
            <DialogHeader className="p-0 text-left mb-10">
              <div className="flex gap-2 mb-6">
                <Badge className="bg-primary text-white hover:bg-primary border-none uppercase font-black px-4 py-1.5 text-[10px] tracking-widest">
                  {category}
                </Badge>
                <Badge variant="outline" className="border-2 border-primary font-black px-4 py-1.5 text-[10px] tracking-widest uppercase text-primary">
                  {condition}
                </Badge>
              </div>
              <DialogTitle className="text-5xl md:text-7xl font-black font-headline text-black mb-4 tracking-tighter leading-[0.85] uppercase italic">
                {name}
              </DialogTitle>
              <div className="text-4xl font-black text-primary tracking-tighter">
                ₱{price.toLocaleString()}
              </div>
            </DialogHeader>

            <div className="space-y-8 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/30 border border-primary/5">
                  <span className="text-[8px] font-black text-primary/60 block mb-1 uppercase tracking-[0.3em]">TAGGED SIZE</span>
                  <span className="font-black text-xl text-black">{size}</span>
                </div>
                <div className="p-4 bg-secondary/30 border border-primary/5">
                  <span className="text-[8px] font-black text-primary/60 block mb-1 uppercase tracking-[0.3em]">AUTHENTICITY</span>
                  <span className="font-black text-xl text-black">VERIFIED</span>
                </div>
              </div>

              <div className="text-sm font-medium leading-relaxed text-foreground/60 uppercase tracking-tight">
                <p>Authentic curated garment from the TopTier Vault. Deep cleaned, inspected, and documented. This 1-of-1 archive piece represents the peak of modern fashion heritage.</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-lg font-black rounded-none shadow-pop transition-transform hover:-translate-y-1">
                <ShoppingBag className="h-6 w-6 mr-3" />
                SECURE PIECE
              </Button>
              <Button variant="outline" className="w-full py-8 text-lg font-black rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="h-6 w-6 mr-3" />
                ENQUIRE
              </Button>
            </div>
            
            <p className="text-[10px] font-black text-center text-primary/30 mt-8 uppercase tracking-[0.5em]">
              PREMIUM SHIPPING INCLUDED
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
