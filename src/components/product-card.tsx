"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart, Heart } from 'lucide-react';

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
        <Card className="group cursor-pointer overflow-hidden border-none shadow-none bg-transparent transition-all duration-300">
          <CardContent className="p-0 relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-transparent group-hover:border-primary group-hover:-translate-y-2 transition-all duration-500">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-black text-white hover:bg-black border-none font-black px-3 py-1 text-[10px] uppercase tracking-widest">
                {category}
              </Badge>
              <Badge className="bg-accent text-white hover:bg-accent border-none font-black px-3 py-1 text-[10px] uppercase tracking-widest">
                {condition}
              </Badge>
            </div>
            <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:text-accent">
              <Heart className="h-5 w-5 fill-current" />
            </button>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-6 px-2 pb-2">
            <h3 className="font-black text-xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">{name}</h3>
            <div className="flex items-center justify-between w-full mt-2">
              <p className="text-primary font-black text-2xl">₱{price.toLocaleString()}</p>
              <span className="text-xs font-black uppercase text-muted-foreground bg-muted px-3 py-1 rounded-full">{size}</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none rounded-[2.5rem] shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto h-[500px] md:h-full bg-secondary/20">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="p-10 flex flex-col justify-center">
            <DialogHeader className="p-0 text-left mb-8">
              <div className="flex gap-2 mb-4">
                <Badge className="bg-primary text-white hover:bg-primary border-none uppercase font-black px-4 py-1.5 text-xs">
                  {category}
                </Badge>
                <Badge variant="outline" className="border-2 border-black font-black px-4 py-1.5 text-xs uppercase">
                  {condition}
                </Badge>
              </div>
              <DialogTitle className="text-5xl font-black font-headline text-black mb-4 tracking-tighter leading-none uppercase italic">
                {name}
              </DialogTitle>
              <div className="text-4xl font-black text-primary">
                ₱{price.toLocaleString()}
              </div>
            </DialogHeader>

            <div className="space-y-8 flex-1">
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-secondary/50 rounded-2xl border-2 border-black/5">
                  <span className="text-xs font-black text-muted-foreground block mb-1 uppercase tracking-widest">Tag Size</span>
                  <span className="font-black text-2xl text-black">{size}</span>
                </div>
                <div className="flex-1 p-4 bg-secondary/50 rounded-2xl border-2 border-black/5">
                  <span className="text-xs font-black text-muted-foreground block mb-1 uppercase tracking-widest">Quality</span>
                  <span className="font-black text-2xl text-black">{condition}</span>
                </div>
              </div>

              <div className="text-lg font-medium leading-relaxed text-muted-foreground">
                <p>Authenticated vintage find. Professionally laundered and ready for the street. Limited 1-of-1 availability.</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-8 text-xl font-black rounded-2xl shadow-pop">
                <ShoppingCart className="h-6 w-6 mr-2" />
                GRAB THIS PIECE
              </Button>
              <Button variant="outline" className="w-full py-8 text-xl font-black rounded-2xl border-2 border-black hover:bg-black hover:text-white transition-all">
                <MessageCircle className="h-6 w-6 mr-2" />
                ASK A QUESTION
              </Button>
            </div>
            
            <p className="text-xs font-bold text-center text-muted-foreground/50 mt-6 uppercase tracking-widest">
              Sold out = Gone forever 
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}