"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart, Heart, Tag } from 'lucide-react';

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
          <CardContent className="p-0 relative aspect-[4/5] overflow-hidden rounded-[3rem] border-4 border-transparent group-hover:border-primary transition-all duration-500 shadow-xl">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <Badge className="bg-white text-primary hover:bg-white border-none font-black px-4 py-1.5 text-xs uppercase tracking-widest shadow-lg">
                {category}
              </Badge>
              <Badge className="bg-primary text-white hover:bg-primary border-none font-black px-4 py-1.5 text-xs uppercase tracking-widest shadow-lg">
                {condition}
              </Badge>
            </div>
            <button className="absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-2xl opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:scale-110 hover:text-primary">
              <Heart className="h-6 w-6 fill-current" />
            </button>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-8 px-4 pb-4">
            <h3 className="font-black text-3xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors mb-2">{name}</h3>
            <div className="flex items-center justify-between w-full">
              <p className="text-primary font-black text-3xl tracking-tight">₱{price.toLocaleString()}</p>
              <span className="text-xs font-black uppercase text-foreground/40 bg-secondary px-4 py-2 rounded-full border border-primary/5">{size}</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-8 border-primary rounded-[4rem] shadow-[20px_20px_0px_0px_rgba(27,77,46,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto h-[600px] md:h-full">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center bg-white">
            <DialogHeader className="p-0 text-left mb-12">
              <div className="flex gap-3 mb-6">
                <Badge className="bg-primary text-white hover:bg-primary border-none uppercase font-black px-5 py-2 text-sm shadow-md">
                  {category}
                </Badge>
                <Badge variant="outline" className="border-4 border-primary font-black px-5 py-2 text-sm uppercase text-primary">
                  {condition}
                </Badge>
              </div>
              <DialogTitle className="text-6xl md:text-8xl font-black font-headline text-black mb-6 tracking-tighter leading-[0.85] uppercase italic">
                {name}
              </DialogTitle>
              <div className="text-5xl font-black text-primary flex items-baseline gap-2">
                ₱{price.toLocaleString()}
                <span className="text-lg font-medium text-foreground/30 line-through">₱{(price * 1.5).toLocaleString()}</span>
              </div>
            </DialogHeader>

            <div className="space-y-10 flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-secondary/50 rounded-[2rem] border-4 border-primary/10">
                  <span className="text-xs font-black text-primary/60 block mb-2 uppercase tracking-[0.2em]">Authentic Size</span>
                  <span className="font-black text-3xl text-black">{size}</span>
                </div>
                <div className="p-6 bg-secondary/50 rounded-[2rem] border-4 border-primary/10">
                  <span className="text-xs font-black text-primary/60 block mb-2 uppercase tracking-[0.2em]">Wear Score</span>
                  <span className="font-black text-3xl text-black">{condition.split(' ')[0]}</span>
                </div>
              </div>

              <div className="text-xl font-medium leading-relaxed text-foreground/70">
                <p>Curated with care in Manila. This 1-of-1 archive piece has been deep-cleaned and quality checked for a new chapter in its life. Sustainably sourced, unapologetically style-forward.</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-12 text-3xl font-black rounded-[2.5rem] shadow-pop transition-transform hover:-translate-y-1">
                <ShoppingCart className="h-10 w-10 mr-4" />
                SECURE GARMENT
              </Button>
              <Button variant="outline" className="w-full py-12 text-3xl font-black rounded-[2.5rem] border-4 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="h-10 w-10 mr-4" />
                ASK US
              </Button>
            </div>
            
            <p className="text-sm font-black text-center text-primary/40 mt-10 uppercase tracking-[0.3em]">
              Fast shipping across Metro Manila
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}