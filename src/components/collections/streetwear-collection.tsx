"use client";

import React from 'react';
import { Product, ProductCard } from '@/components/product-card';

export function StreetwearCollection({ products }: { products: Product[] }) {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b-4 border-primary pb-8">
        <h2 className="text-4xl md:text-6xl font-black font-headline italic text-primary uppercase tracking-tighter">
          STREET DROPS
        </h2>
        <Badge className="bg-primary text-primary-foreground font-black px-4 py-2 uppercase tracking-widest">
          {products.length} UNITS
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} variant="streetwear" />
        ))}
      </div>
    </div>
  );
}

import { Badge } from '@/components/ui/badge';