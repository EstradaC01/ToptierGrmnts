"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';

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
    imageUrl: 'https://www.estetestudio.com/cdn/shop/collections/IMG_0848.jpg?v=1717696982',
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
    imageUrl: 'https://images.garmentory.com/images/9618633/large/KHAKI-DECONSTRUCTED-KNIT-SWEATER-20230825113052.jpg?1692963055',
    imageHint: 'knit sweater',
    condition: 'ARCHIVE',
    size: 'M',
    description: 'A deconstructed masterpiece with exposed seams and a unique textured finish.'
  },
  {
    id: 'street-1',
    name: 'RAW EDGE DENIM TROUSERS',
    price: 12400,
    category: 'STREETWEAR',
    imageUrl: 'https://us.cernucci.com/cdn/shop/files/VG-JNDE26CJM-M-LB-4_43ead5a1-8c98-4eba-818e-bc32df1372fc.jpg?v=1729257935&width=800',
    imageHint: 'denim pants',
    condition: 'EXCELLENT',
    size: '32',
    description: 'Street-ready denim with distressed raw edges and a relaxed urban fit.'
  },
  {
    id: 'street-2',
    name: 'PANELLED CARGO PANTS',
    price: 14000,
    category: 'STREETWEAR',
    imageUrl: 'https://www.spaziopritelli.com/cdn/shop/files/9999225660568_1_1.jpg?v=1765422404',
    imageHint: 'cargo pants',
    condition: 'EXCELLENT',
    size: 'L',
    description: 'Multi-pocketed architectural cargo pants with panelled construction.'
  },
  {
    id: 'street-3',
    name: 'STREET GRAPHIC HOODIE',
    price: 8900,
    category: 'STREETWEAR',
    imageUrl: 'https://m.media-amazon.com/images/I/91ZcBqtMjoL._AC_UY1000_.jpg',
    imageHint: 'streetwear hoodie',
    condition: 'NEW',
    size: 'XL',
    description: 'Heavyweight jersey hoodie featuring bold graphic print and oversized hood.'
  },
  {
    id: 'formal-1',
    name: 'STRUCTURED WOOL COAT',
    price: 32000,
    category: 'FORMAL WEAR',
    imageUrl: 'https://imageb.gc-static.com/media/catalog/product/m/n/mng-structured_wool_coat-burgundy-front.jpg',
    imageHint: 'wool coat',
    condition: 'MINT',
    size: 'L',
    description: 'Double-breasted tailored wool coat for a refined formal silhouette.'
  },
  {
    id: 'formal-2',
    name: 'TAILORED TUXEDO PANTS',
    price: 14500,
    category: 'FORMAL WEAR',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1025/3059/files/BlackTux_Pants_Front_1500x2000_crop_center.jpg?v=1764901888',
    imageHint: 'tuxedo pants',
    condition: 'EXCELLENT',
    size: '30',
    description: 'Classic tuxedo trousers with silk side stripes and sharp crease.'
  },
  {
    id: 'bag-1',
    name: 'CANVAS UTILITY TOTE',
    price: 9500,
    category: 'GARMENTS & BAG',
    imageUrl: 'https://picsum.photos/seed/clothing8/800/800',
    imageHint: 'canvas tote',
    condition: 'EXCELLENT',
    size: 'OS',
    description: 'Durable heavyweight canvas tote with reinforced leather handles.'
  },
  {
    id: 'bag-2',
    name: 'MONOGRAM LEATHER BELT',
    price: 5900,
    category: 'GARMENTS & BAG',
    imageUrl: 'https://picsum.photos/seed/clothing3/800/800',
    imageHint: 'leather belt',
    condition: 'NEW',
    size: 'OS',
    description: 'Premium Italian leather belt with a monogrammed brushed metal buckle.'
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

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.category.toUpperCase() === activeCategory);

  const renderCollection = () => {
    if (activeCategory === 'SPORTSWEAR' || filteredProducts.length === 0) {
      return (
        <div className="py-48 text-center bg-primary/5 border-4 border-dashed border-primary/20">
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-foreground/20">
            NO PIECES FOUND <br/>IN THIS VAULT.
          </h3>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] text-primary/40">
            CHECK BACK SOON FOR DROPS
          </p>
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
    <main className="flex-grow pt-40 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-20">
          <div className="min-h-[60vh]">
            {renderCollection()}
          </div>
          
          {filteredProducts.length > 0 && (activeCategory !== 'SPORTSWEAR') && (
            <div className="flex flex-col items-center mt-32 gap-6">
              <div className="w-full max-w-sm h-1 bg-primary/10 overflow-hidden">
                <div className="h-full bg-primary w-2/3" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 italic">
                END OF {activeCategory} ARCHIVE
              </p>
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
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-[0.8em] animate-pulse">
          INITIATING VAULT...
        </div>
      }>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}
