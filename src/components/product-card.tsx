
"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';

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
        <Card className="group cursor-pointer overflow-hidden border-none shadow-none bg-transparent hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0 relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <Badge className="absolute top-3 left-3 bg-white/90 text-primary hover:bg-white/100 border-none font-semibold">
              {category}
            </Badge>
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-3 px-1 pb-4">
            <h3 className="font-semibold text-base line-clamp-1">{name}</h3>
            <p className="text-primary font-bold text-lg mt-0.5">₱{price.toLocaleString()}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{size}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{condition}</span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto h-[400px] md:h-full">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
          <div className="p-8 flex flex-col">
            <DialogHeader className="p-0 text-left mb-6">
              <Badge className="w-fit mb-2 bg-muted text-muted-foreground hover:bg-muted border-none uppercase tracking-wider text-[10px]">
                {category}
              </Badge>
              <DialogTitle className="text-3xl font-bold font-headline text-primary mb-2">
                {name}
              </DialogTitle>
              <div className="text-2xl font-bold text-foreground">
                ₱{price.toLocaleString()}
              </div>
            </DialogHeader>

            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs text-muted-foreground block mb-1">Size</span>
                  <span className="font-semibold text-primary">{size}</span>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs text-muted-foreground block mb-1">Condition</span>
                  <span className="font-semibold text-primary">{condition}</span>
                </div>
              </div>

              <div className="text-sm leading-relaxed text-muted-foreground">
                <p>One-of-a-kind vintage piece carefully inspected and cleaned. Sustainable fashion helps reduce textile waste. Give this item a second life!</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button className="w-full bg-[#0084FF] hover:bg-[#0073E6] text-white py-6 text-lg font-bold gap-3 rounded-xl border-none">
                <MessageCircle className="h-5 w-5" />
                Ask About This Item
              </Button>
              <Button variant="outline" className="w-full py-6 text-lg font-semibold rounded-xl border-2">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
            
            <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
              *Items are limited and subject to availability. 
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
