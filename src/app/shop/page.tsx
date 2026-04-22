"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { FilterX } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import collection layouts
import { LuxuryCollection } from '@/components/collections/luxury-collection';
import { StreetwearCollection } from '@/components/collections/streetwear-collection';
import { FormalCollection } from '@/components/collections/formal-collection';
import { GarmentsBagsCollection } from '@/components/collections/garments-bags-collection';

const MOCK_PRODUCTS = [
  {
    id: 'lux-1',
    name: 'VINTAGE OVERSIZED BLAZER',
    price: 18500,
    category: 'LUXURY',
    imageUrl: 'https://picsum.photos/seed/clothing1/800/1000',
    imageHint: 'vintage blazer',
    condition: 'MINT',
    size: 'XL',
    description: 'A structured archive piece featuring high-grade wool and a classic silhouette.'
  },
  {
    id: 'lux-2',
    name: 'DECONSTRUCTED KNIT SWEATER',
    price: 15200,
    category: 'LUXURY',
    imageUrl: 'https://picsum.photos/seed/clothing4/800/1000',
    imageHint: 'knit sweater',
    condition: 'ARCHIVE',
    size: 'M'
  },
  {
    id: 'street-1',
    name: 'RAW EDGE DENIM TROUSERS',
    price: 12400,
    category: 'STREETWEAR',
    imageUrl: 'https://picsum.photos/seed/clothing2/600/600',
    imageHint: 'denim pants',
    condition: 'EXCELLENT',
    size: '32'
  },
  {
    id: 'street-2',
    name: 'PANELLED CARGO PANTS',
    price: 14000,
    category: 'STREETWEAR',
    imageUrl: 'https://picsum.photos/seed/clothing5/600/600',
    imageHint: 'cargo pants',
    condition: 'EXCELLENT',
    size: 'L'
  },
  {
    id: 'street-3',
    name: 'STREET GRAPHIC HOODIE',
    price: 8900,
    category: 'STREETWEAR',
    imageUrl: 'https://picsum.photos/seed/clothing10/600/600',
    imageHint: 'streetwear hoodie',
    condition: 'NEW',
    size: 'XL'
  },
  {
    id: 'formal-1',
    name: 'STRUCTURED WOOL COAT',
    price: 32000,
    category: 'FORMAL WEAR',
    imageUrl: 'https://picsum.photos/seed/clothing7/600/750',
    imageHint: 'wool coat',
    condition: 'MINT',
    size: 'L'
  },
  {
    id: 'formal-2',
    name: 'TAILORED TUXEDO PANTS',
    price: 14500,
    category: 'FORMAL WEAR',
    imageUrl: 'https://picsum.photos/seed/clothing11/600/750',
    imageHint: 'tuxedo pants',
    condition: 'EXCELLENT',
    size: '30'
  },
  {
    id: 'bag-1',
    name: 'CANVAS UTILITY TOTE',
    price: 9500,
    category: 'GARMENTS & BAG',
    imageUrl: 'https://picsum.photos/seed/clothing8/800/800',
    imageHint: 'canvas tote',
    condition: 'EXCELLENT',
    size: 'OS'
  },
  {
    id: 'bag-2',
    name: 'MONOGRAM LEATHER BELT',
    price: 5900,
    category: 'GARMENTS & BAG',
    imageUrl: 'https://picsum.photos/seed/clothing3/800/800',
    imageHint: 'leather belt',
    condition: 'NEW',
    size: 'OS'
  }
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('cat');
  
  const [activeCategory, setActiveCategory] = useState<string>('LUXURY');

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam.toUpperCase());
    } else {
      setActiveCategory('LUXURY');
    }
  }, [categoryParam]);

  const categories = ['LUXURY', 'STREETWEAR', 'SPORTSWEAR', 'FORMAL WEAR', 'GARMENTS & BAG'];

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.category.toUpperCase() === activeCategory);

  const renderCollection = () => {
    if (activeCategory === 'SPORTSWEAR' || filteredProducts.length === 0) {
      return (
        <div className="py-48 text-center bg-primary/5 border-4 border-dashed border-primary/20">
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-foreground/20">NO PIECES FOUND <br/>IN THIS VAULT.</h3>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] text-primary/40">CHECK BACK SOON FOR DROPS</p>
        </div>
      );
    }

    switch (activeCategory) {
      case 'LUXURY':
        return <LuxuryCollection products={filteredProducts} />;
      case 'STREETWEAR':
        return <StreetwearCollection products={filteredProducts} />;
      case 'FORMAL WEAR':
        return <FormalCollection products={filteredProducts} />;
      case 'GARMENTS & BAG':
        return <GarmentsBagsCollection products={filteredProducts} />;
      default:
        return <LuxuryCollection products={filteredProducts} />;
    }
  };

  return (
    <main className="flex-grow pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-20">
          
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b-2 border-primary/10 pb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <Button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    variant={activeCategory === cat ? "default" : "outline"}
                    className={cn(
                      "rounded-none px-8 py-6 font-black uppercase tracking-widest text-[10px] transition-all",
                      activeCategory === cat 
                        ? "bg-primary text-primary-foreground shadow-pop" 
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    )}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  <span className="text-foreground">{filteredProducts.length}</span> PIECES LOADED
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[60vh]">
            {renderCollection()}
          </div>
          
          {filteredProducts.length > 0 && (
            <div className="flex flex-col items-center mt-32 gap-6">
              <div className="w-full max-w-sm h-1 bg-primary/10 overflow-hidden">
                <div className="h-full bg-primary w-2/3" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 italic">END OF {activeCategory} ARCHIVE</p>
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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black uppercase tracking-[0.8em] animate-pulse">INITIATING VAULT...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}