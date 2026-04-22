import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Star, ShieldCheck, Globe, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const newArrivals = PlaceHolderImages.slice(0, 8).map((img, index) => ({
    id: img.id,
    name: img.description,
    price: 1500 + Math.floor(Math.random() * 8500),
    category: ['STREETWEAR', 'LUXURY', 'SPORTS', 'FORMAL'][index % 4],
    imageUrl: img.imageUrl,
    imageHint: "luxury fashion streetwear",
    condition: ['MINT', 'EXCELLENT', 'ARCHIVE'][index % 3],
    size: ['S', 'M', 'L', 'XL', 'OS'][index % 5],
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white pt-24 pb-12">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 font-black text-[10px] mb-8 tracking-[0.4em] uppercase">
                <ShieldCheck className="h-3 w-3" />
                AUTHENTICATED ARCHIVE // 2024
              </div>
              <h1 className="text-8xl md:text-[14rem] font-black font-headline leading-[0.75] mb-8 tracking-tighter uppercase italic">
                THE <br/>
                <span className="text-primary not-italic">VAULT.</span>
              </h1>
              <p className="text-xl md:text-2xl text-black font-bold mb-12 max-w-lg leading-tight tracking-tight">
                THE DEFINITIVE SOURCE FOR LUXURY STREETWEAR AND CURATED ARCHIVE GARMENTS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-none px-12 py-10 text-xl font-black shadow-pop transition-transform hover:-translate-x-1 hover:-translate-y-1">
                  <Link href="/shop" className="flex items-center gap-3">SHOP THE DROP <ArrowRight className="h-6 w-6" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white rounded-none px-12 py-10 text-xl font-black transition-all">
                  SELL COLLECTIONS
                </Button>
              </div>
              
              <div className="mt-20 flex gap-12 border-t border-black/10 pt-12 hidden md:flex">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">GLOBAL SOURCING</span>
                  <span className="text-sm font-bold">PARIS // TOKYO // NYC</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">LOGISTICS</span>
                  <span className="text-sm font-bold">24H DISPATCH</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">QUALITY</span>
                  <span className="text-sm font-bold">10-POINT AUTH</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] hidden lg:block group">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-white overflow-hidden border-4 border-black transition-transform duration-700 hover:scale-[1.01]">
                <Image
                  src="https://picsum.photos/seed/fashion-hero-lux/1200/1600"
                  alt="High fashion streetwear"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                  data-ai-hint="luxury fashion editorial"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white px-8 py-4 font-black text-2xl rotate-3 shadow-luxury">
                EST. 2024
              </div>
            </div>
          </div>
        </section>

        {/* Category Strip */}
        <section className="bg-black py-4 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-8 items-center">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="flex gap-8 items-center">
                <span className="text-white font-black text-4xl italic tracking-tighter">LUXURY ARCHIVE</span>
                <Star className="h-6 w-6 text-primary fill-primary" />
                <span className="text-white font-black text-4xl italic tracking-tighter">STREETWEAR DROP</span>
                <Star className="h-6 w-6 text-primary fill-primary" />
                <span className="text-white font-black text-4xl italic tracking-tighter">RARE GARMENTS</span>
                <Star className="h-6 w-6 text-primary fill-primary" />
              </div>
            ))}
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-black tracking-[0.5em] text-xs uppercase mb-4 block">LATEST ARRIVALS</span>
                <h2 className="text-7xl md:text-9xl font-black font-headline text-black tracking-tighter uppercase leading-[0.8]">NEW <br/><span className="text-primary italic">PIECES.</span></h2>
              </div>
              <Button asChild variant="link" className="text-black font-black text-xl group p-0 hover:no-underline border-b-4 border-primary">
                <Link href="/shop" className="flex items-center gap-3">
                  EXPLORE ALL ARCHIVES <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-48 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
            <h2 className="text-8xl md:text-[12rem] font-black font-headline mb-12 uppercase italic leading-[0.7] tracking-tighter">
              BEYOND <br/>THE HYPE.
            </h2>
            <p className="text-xl md:text-3xl text-white font-bold mb-16 max-w-3xl mx-auto leading-tight uppercase italic">
              CURATING THE WORLD'S MOST SOUGHT-AFTER GARMENTS. AUTHENTICATED BY SPECIALISTS.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-none px-20 py-12 text-3xl font-black transition-all hover:scale-105 shadow-luxury">
              JOIN THE CIRCLE
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-[40vw] font-black italic whitespace-nowrap">
            TOP TIER
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
