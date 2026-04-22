"use client";

import React from 'react';
import { Product, ProductCard } from '@/components/product-card';

export function LuxuryCollection({ products }: { products: Product[] }) {
  return (
    <div className="space-y-24">
      <div className="max-w-3xl">
        <p className="text-primary font-black tracking-[0.5em] text-[10px] uppercase mb-6">CURATED EXCLUSIVES</p>
        <h2 className="text-5xl md:text-8xl font-black font-headline text-foreground italic leading-none tracking-tighter uppercase">
          THE ARCHIVE <br/><span className="text-primary not-italic">COLLECTION.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
        {products.map((product, idx) => (
          <div key={product.id} className={idx % 2 === 1 ? "md:pt-40" : ""}>
            <ProductCard {...product} variant="luxury" />
            <div className="mt-8 border-t-2 border-primary/10 pt-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">MASTERPIECE NO. 0{idx + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}