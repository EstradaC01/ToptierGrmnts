"use client";

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingBag, Eye, ShieldCheck, X } from 'lucide-react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  condition: string;
  size: string;
  description?: string;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  category, 
  imageUrl, 
  imageHint, 
  condition, 
  size, 
  description = "A highly sought-after archive piece from our curated collection. This garment represents the pinnacle of design and material quality, authenticated by our specialists.",
  viewMode = 'grid' 
}: ProductCardProps) {
  const isList = viewMode === 'list';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={cn(
          "group cursor-pointer overflow-hidden border-none shadow-none bg-transparent transition-all",
          isList ? "flex flex-row items-center gap-6" : "flex flex-col"
        )}>
          {/* Image Container */}
          <CardContent className={cn(
            "p-0 relative overflow-hidden bg-muted/5 border-2 border-primary/20 transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]",
            isList ? "w-48 h-48 shrink-0" : "aspect-[3/4] w-full"
          )}>
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              data-ai-hint={imageHint}
              sizes={isList ? "192px" : "(max-width: 768px) 50vw, 25vw"}
            />
            
            {/* Hover Overlay - View Details Button */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" className="rounded-none font-black uppercase text-[10px] tracking-widest gap-2 bg-background text-foreground">
                <Eye className="h-4 w-4" />
                View Details
              </Button>
            </div>

            <div className="absolute top-2 left-2 flex flex-col gap-1">
              <Badge className="bg-primary text-primary-foreground border-none font-black px-2 py-0.5 text-[8px] uppercase tracking-widest">
                {category}
              </Badge>
            </div>
          </CardContent>

          {/* Product Details info */}
          <CardFooter className={cn(
            "flex flex-col items-start px-0 pb-4",
            isList ? "pt-0 flex-1" : "pt-6"
          )}>
            <div className="flex justify-between w-full items-start mb-2">
              <h3 className={cn(
                "font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors italic",
                isList ? "text-3xl" : "text-2xl"
              )}>{name}</h3>
              {isList && (
                <Badge variant="outline" className="border-2 border-primary font-black px-2 py-0.5 text-[8px] tracking-widest uppercase text-primary">
                  {condition}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between w-full mt-auto">
              <div className="flex flex-col">
                <p className={cn(
                  "text-foreground font-black tracking-tighter",
                  isList ? "text-4xl" : "text-3xl"
                )}>₱{price.toLocaleString()}</p>
                {isList && <p className="text-[10px] font-bold text-foreground/40 mt-1 uppercase tracking-widest">SIZE: {size}</p>}
              </div>
              {!isList && (
                <span className="text-[9px] font-black uppercase text-primary bg-primary/5 px-2 py-1 border-2 border-primary">
                  {size}
                </span>
              )}
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      {/* Product Detail Modal */}
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background border-4 border-primary rounded-none shadow-luxury [&>button]:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Modal Left: Image */}
          <div className="relative aspect-[3/4] md:aspect-auto h-[400px] md:h-full bg-muted/10">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
            <div className="absolute top-8 left-8 bg-primary text-primary-foreground px-6 py-2 font-black italic tracking-widest uppercase text-xs">
              ARCHIVE // {category}
            </div>
            
            <DialogPrimitive.Close className="absolute top-4 right-4 bg-background border-2 border-primary p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>
          </div>

          {/* Modal Right: Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-background border-l-4 border-primary relative">
            <DialogHeader className="p-0 text-left mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary border-none uppercase font-black px-4 py-1.5 text-[10px] tracking-widest">
                  {condition}
                </Badge>
                <div className="flex items-center gap-1 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[9px] font-black uppercase tracking-widest">AUTHENTICATED</span>
                </div>
              </div>
              <DialogTitle className="text-5xl md:text-7xl font-black font-headline text-foreground mb-4 tracking-tighter leading-[0.8] uppercase italic">
                {name}
              </DialogTitle>
              <div className="text-4xl font-black text-primary tracking-tighter">
                ₱{price.toLocaleString()}
              </div>
            </DialogHeader>

            <div className="space-y-8 flex-1">
              <div className="grid grid-cols-2 gap-0 border-2 border-primary">
                <div className="p-4 border-r-2 border-primary bg-primary/5">
                  <span className="text-[9px] font-black text-foreground/40 block mb-1 uppercase tracking-[0.3em]">TAGGED SIZE</span>
                  <span className="font-black text-2xl text-foreground leading-none">{size}</span>
                </div>
                <div className="p-4 bg-background">
                  <span className="text-[9px] font-black text-foreground/40 block mb-1 uppercase tracking-[0.3em]">CATEGORY</span>
                  <span className="font-black text-xl text-primary leading-none italic uppercase">{category}</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-foreground/40 block uppercase tracking-[0.4em]">ITEM DESCRIPTION</span>
                <p className="text-xs font-bold leading-relaxed text-foreground/70 uppercase tracking-tight">
                  {description}
                </p>
              </div>

              <div className="flex gap-8 border-t-2 border-primary/10 pt-6">
                <div>
                  <span className="text-[8px] font-black text-foreground/30 block mb-1 uppercase tracking-widest">AVAILABILITY</span>
                  <span className="text-[10px] font-black text-primary uppercase">IN STOCK (1-OF-1)</span>
                </div>
                <div>
                  <span className="text-[8px] font-black text-foreground/30 block mb-1 uppercase tracking-widest">CONDITION</span>
                  <span className="text-[10px] font-black text-foreground uppercase">{condition}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-8 text-lg font-black rounded-none shadow-pop transition-transform hover:-translate-y-1">
                <ShoppingBag className="h-5 w-5 mr-3" />
                ADD TO CART
              </Button>
              <Button variant="outline" className="w-full py-8 text-lg font-black rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <MessageCircle className="h-5 w-5 mr-3" />
                ENQUIRE
              </Button>
            </div>
            
            <p className="text-[9px] font-black text-center text-foreground/20 mt-8 uppercase tracking-[0.6em]">
              PREMIUM GLOBAL SHIPPING INCLUDED
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
