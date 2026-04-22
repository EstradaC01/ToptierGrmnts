"use client";

import React from 'react';
import { Product, ProductCard } from '@/components/product-card';

export function FormalCollection({ products }: { products: Product[] }) {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black font-headline text-foreground uppercase tracking-tighter italic">
          TAILORED <span className="text-primary">ELEGANCE</span>
        </h2>
        <p className="text-xs font-bold text-foreground/40 uppercase tracking-[0.4em]">Precise cuts // Premium fabrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} variant="formal" />
        ))}
      </div>
    </div>
  );
}