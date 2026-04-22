
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

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  condition: string;
  size: string;
  description?: string;
}

interface ProductCardProps extends Product {
  variant?: 'luxury' | 'streetwear' | 'formal' | 'garments';
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
  variant = 'streetwear'
}: ProductCardProps) {
  
  const variantStyles = {
    luxury: {
      card: "bg-transparent",
      imageContainer: "aspect-[3/4] border-none shadow-none",
      imageClass: "object-cover",
      textClass: "font-headline text-3xl italic tracking-tight",
      priceClass: "text-2xl font-light",
    },
    streetwear: {
      card: "bg-transparent border-none",
      imageContainer: "aspect-square border-2 border-primary/20 shadow-none group-hover:shadow-pop",
      imageClass: "object-cover",
      textClass: "font-black text-xl tracking-tighter uppercase italic",
      priceClass: "text-2xl font-black tracking-tighter",
    },
    formal: {
      card: "bg-white p-4 border border-primary/10",
      imageContainer: "aspect-[4/5] bg-muted/5",
      imageClass: "object-cover",
      textClass: "font-bold text-lg uppercase tracking-widest",
      priceClass: "text-xl font-bold",
    },
    garments: {
      card: "bg-transparent",
      imageContainer: "aspect-[1/1] border-b-4 border-primary/20",
      imageClass: "object-contain bg-white p-4",
      textClass: "font-black text-sm uppercase tracking-[0.2em]",
      priceClass: "text-lg font-black",
    }
  };

  const style = variantStyles[variant];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={cn(
          "group cursor-pointer overflow-hidden transition-all duration-300 rounded-none border-none shadow-none",
          style.card
        )}>
          <CardContent className={cn(
            "p-0 relative overflow-hidden transition-all duration-300",
            style.imageContainer
          )}>
            <Image
              src={imageUrl}
              alt={name}
              fill
              className={cn("transition-all duration-700 group-hover:scale-105", style.imageClass)}
              data-ai-hint={imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" className="rounded-none font-black uppercase text-[10px] tracking-widest gap-2 bg-background text-foreground shadow-pop">
                <Eye className="h-4 w-4" />
                VIEW DETAILS
              </Button>
            </div>

            <div className="absolute top-2 left-2">
              <Badge className="bg-primary text-primary-foreground border-none font-black px-2 py-0.5 text-[8px] uppercase tracking-widest">
                {condition}
              </Badge>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-start px-0 pt-4 pb-0">
            <h3 className={cn("text-foreground group-hover:text-primary transition-colors leading-none mb-1 uppercase", style.textClass)}>
              {name}
            </h3>
            <div className="flex justify-between w-full items-center">
              <p className={cn("text-foreground font-bold", style.priceClass)}>₱{price.toLocaleString()}</p>
              <span className="text-[10px] font-black uppercase text-primary/40 tracking-widest">
                {size}
              </span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background border-4 border-primary rounded-none shadow-luxury [&>button]:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto h-[400px] md:h-full bg-muted/10">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
            <div className="absolute top-8 left-8 bg-primary text-primary-foreground px-6 py-2 font-black italic tracking-widest uppercase text-xs">
              {category}
            </div>
            
            <DialogPrimitive.Close className="absolute top-4 right-4 bg-background border-2 border-primary p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>
          </div>

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
                  <span className="text-[9px] font-black text-foreground/40 block mb-1 uppercase tracking-[0.3em]">COLLECTION</span>
                  <span className="font-black text-xl text-primary leading-none italic uppercase">{category}</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-foreground/40 block uppercase tracking-[0.4em]">ITEM DESCRIPTION</span>
                <p className="text-xs font-bold leading-relaxed text-foreground/70 uppercase tracking-tight">
                  {description}
                </p>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
