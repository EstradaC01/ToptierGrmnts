import React, { Suspense } from 'react';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ShopContent } from './shop-content';

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
