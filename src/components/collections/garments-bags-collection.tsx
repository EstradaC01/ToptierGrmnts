"use client";

import React from 'react';
import { Product, ProductCard } from '@/components/product-card';

export function GarmentsBagsCollection({ products }: { products: Product[] }) {
  return (
    <div className="space-y-20">
      <div className="border-l-8 border-primary pl-8">
        <h2 className="text-5xl font-black font-headline text-foreground uppercase tracking-tighter">
          ACCESSORIES & <br/><span className="text-primary italic">CARRYALLS.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {products.map((product, idx) => (
          <div key={product.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
            <div className="w-full md:w-1/2">
              <ProductCard {...product} variant="garments" />
            </div>
            <div className="w-full md:w-1/2 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">DETAILS</span>
                <h3 className="text-4xl font-black font-headline italic uppercase tracking-tighter">{product.name}</h3>
              </div>
              <p className="text-sm font-bold text-foreground/60 uppercase tracking-tight leading-relaxed max-w-sm">
                Specially selected for its unique construction and architectural silhouette. Part of our rare find series.
              </p>
              <div className="flex gap-4">
                <div className="p-4 border-2 border-primary/10 flex-1">
                  <span className="text-[8px] font-black block text-foreground/40 uppercase">VOLUME</span>
                  <span className="font-black text-lg">ARCHIVE UNIT</span>
                </div>
                <div className="p-4 border-2 border-primary/10 flex-1">
                  <span className="text-[8px] font-black block text-foreground/40 uppercase">WEIGHT</span>
                  <span className="font-black text-lg">HEAVYWEIGHT</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}