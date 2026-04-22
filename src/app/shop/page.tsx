
"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, SlidersHorizontal, ChevronDown, FilterX } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// Mock Data Implementation
const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'VINTAGE OVERSIZED BLAZER',
    price: 18500,
    category: 'Tops',
    imageUrl: 'https://picsum.photos/seed/clothing1/400/500',
    imageHint: 'vintage blazer',
    condition: 'MINT',
    size: 'XL',
    description: 'A structured archive piece featuring high-grade wool and a classic silhouette. Perfect for elevated layering.'
  },
  {
    id: '2',
    name: 'RAW EDGE DENIM TROUSERS',
    price: 12400,
    category: 'Bottoms',
    imageUrl: 'https://picsum.photos/seed/clothing2/400/500',
    imageHint: 'denim pants',
    condition: 'EXCELLENT',
    size: '32',
    description: 'Deconstructed denim with reinforced stitching and a unique raw edge finish. A staple for any archive collection.'
  },
  {
    id: '3',
    name: 'MONOGRAM LEATHER BELT',
    price: 5900,
    category: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/clothing3/400/500',
    imageHint: 'leather belt',
    condition: 'NEW',
    size: 'OS',
    description: 'Hand-crafted leather belt featuring our signature archive buckle. Authenticated luxury hardware.'
  },
  {
    id: '4',
    name: 'DECONSTRUCTED KNIT SWEATER',
    price: 15200,
    category: 'Tops',
    imageUrl: 'https://picsum.photos/seed/clothing4/400/500',
    imageHint: 'knit sweater',
    condition: 'ARCHIVE',
    size: 'M',
    description: 'Complex knit patterns with intentional distress points. A rare piece representing avant-garde material exploration.'
  },
  {
    id: '5',
    name: 'PANELLED CARGO PANTS',
    price: 14000,
    category: 'Bottoms',
    imageUrl: 'https://picsum.photos/seed/clothing5/400/500',
    imageHint: 'cargo pants',
    condition: 'EXCELLENT',
    size: 'L',
    description: 'Multi-pocket functionality meets architectural design. Durable technical fabric for the modern explorer.'
  },
  {
    id: '6',
    name: 'SILVER CHAIN BRACELET',
    price: 3800,
    category: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/clothing6/400/500',
    imageHint: 'silver bracelet',
    condition: 'MINT',
    size: 'OS',
    description: 'Heavyweight sterling silver chain with a custom industrial clasp. A bold statement accessory.'
  },
  {
    id: '7',
    name: 'STRUCTURED WOOL COAT',
    price: 32000,
    category: 'Tops',
    imageUrl: 'https://picsum.photos/seed/clothing7/400/500',
    imageHint: 'wool coat',
    condition: 'MINT',
    size: 'L',
    description: 'Double-breasted formal archive piece. Exceptional drape and warmth, curated from 90s luxury runway.'
  },
  {
    id: '8',
    name: 'TONAL CANVAS TOTE',
    price: 7500,
    category: 'Accessories',
    imageUrl: 'https://picsum.photos/seed/clothing8/400/500',
    imageHint: 'canvas tote',
    condition: 'EXCELLENT',
    size: 'OS',
    description: 'High-density canvas construction with leather accents. Minimalist aesthetic with maximum utility.'
  }
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('cat');
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'All');

  const categories = ['All', 'Tops', 'Bottoms', 'Accessories', 'Sportswear'];

  // Filtering Logic
  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <main className="flex-grow pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          
          {/* Page Header & Filtering */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-foreground pb-8">
              <div>
                <span className="text-primary font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">BROWSE THE VAULT</span>
                <h1 className="text-6xl md:text-8xl font-black font-headline text-foreground tracking-tighter uppercase italic leading-[0.8]">
                  {activeCategory} <span className="text-primary not-italic">PIECES.</span>
                </h1>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <Button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    variant={activeCategory === cat ? "default" : "outline"}
                    className={cn(
                      "rounded-none px-8 py-6 font-black uppercase tracking-widest text-[10px] transition-all",
                      activeCategory === cat 
                        ? "bg-foreground text-background" 
                        : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                    )}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between py-4 border-b-2 border-foreground/5">
              <div className="flex items-center gap-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  <span className="text-foreground">{filteredProducts.length}</span> UNITS FOUND
                </p>
                {activeCategory !== 'All' && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-[8px] font-black uppercase tracking-widest gap-1 p-0 hover:bg-transparent text-primary"
                    onClick={() => setActiveCategory('All')}
                  >
                    <FilterX className="h-3 w-3" /> Clear Filter
                  </Button>
                )}
              </div>
              
              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center bg-foreground/5 p-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setViewMode('grid')}
                    className={cn("h-8 w-8 rounded-none", viewMode === 'grid' ? "bg-background shadow-sm" : "text-foreground/40")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setViewMode('list')}
                    className={cn("h-8 w-8 rounded-none", viewMode === 'list' ? "bg-background shadow-sm" : "text-foreground/40")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <div className="h-6 w-[2px] bg-foreground/10 hidden md:block" />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 text-[10px] font-black uppercase tracking-widest p-0 hover:bg-transparent">
                      SORT: NEWEST <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-none border-2 border-foreground shadow-pop">
                    <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest">Newest First</DropdownMenuItem>
                    <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest">Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem className="text-[10px] font-black uppercase tracking-widest">Price: High to Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline" size="sm" className="gap-2 border-2 border-foreground rounded-none hidden md:flex font-black text-[10px] uppercase tracking-widest h-10 px-6">
                  <SlidersHorizontal className="h-3 w-3" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Product Layout */}
          {filteredProducts.length > 0 ? (
            <div className={cn(
              "grid gap-x-8 gap-y-16",
              viewMode === 'grid' 
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                : "grid-cols-1"
            )}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-40 text-center">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter text-foreground/20">NO PIECES FOUND IN THIS VAULT.</h3>
              <Button 
                variant="link" 
                onClick={() => setActiveCategory('All')}
                className="text-primary font-black uppercase tracking-widest mt-4"
              >
                BROWSE ALL COLLECTIONS
              </Button>
            </div>
          )}

          {/* Pagination (Only if content exists) */}
          {filteredProducts.length > 0 && (
            <div className="flex flex-col items-center mt-20 gap-6">
              <div className="w-full max-w-md h-2 bg-foreground/5 border border-foreground/10 overflow-hidden">
                <div className="h-full bg-primary w-full" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">SHOWING {filteredProducts.length} UNITS</p>
              <Button variant="outline" size="lg" className="px-16 py-8 border-4 border-foreground font-black rounded-none uppercase tracking-[0.2em] shadow-pop transition-all hover:-translate-y-1">
                Refresh Collection
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black uppercase tracking-widest">Loading the Vault...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}
