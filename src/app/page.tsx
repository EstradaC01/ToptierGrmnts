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
        <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background pt-24 pb-12">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 font-black text-xs mb-8 tracking-[0.3em] uppercase">
                <ShieldCheck className="h-4 w-4" />
                AUTHENTICATED ARCHIVE
              </div>
              <h1 className="text-8xl md:text-[12rem] font-black font-headline leading-[0.8] mb-8 tracking-tighter uppercase italic">
                THE <br/>
                <span className="text-primary not-italic">VAULT.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-lg font-medium leading-tight">
                Luxury streetwear and curated garments. Hand-selected rare pieces for the modern fashion enthusiast.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 py-8 text-xl font-black shadow-pop transition-transform hover:-translate-x-1 hover:-translate-y-1">
                  <Link href="/shop" className="flex items-center gap-3">SHOP THE DROP <ArrowRight className="h-6 w-6" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-none px-12 py-8 text-xl font-black">
                  SELL COLLECTIONS
                </Button>
              </div>
              
              <div className="mt-20 flex gap-12 grayscale opacity-50 hidden md:flex">
                <div className="flex items-center gap-2 font-black text-xs tracking-widest uppercase">
                  <Globe className="h-4 w-4" /> Global Sourcing
                </div>
                <div className="flex items-center gap-2 font-black text-xs tracking-widest uppercase">
                  <Zap className="h-4 w-4" /> Fast Logistics
                </div>
                <div className="flex items-center gap-2 font-black text-xs tracking-widest uppercase">
                  <Trophy className="h-4 w-4" /> Premium Quality
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] hidden lg:block group">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-white overflow-hidden border-2 border-primary transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src="https://picsum.photos/seed/fashion-hero-lux/1200/1600"
                  alt="High fashion streetwear"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="luxury fashion editorial"
                />
              </div>
              <div className="absolute top-8 -right-8 bg-primary text-white px-8 py-4 font-black text-2xl rotate-90 origin-left">
                DROP 042 // ARCHIVE
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-24 bg-white border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {['LUXURY', 'STREETWEAR', 'SPORTSWEAR', 'BAGS'].map((cat, i) => (
                <Link key={cat} href={`/shop?cat=${cat}`} className="group relative h-[400px] overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/lux-cat-${i}/800/1200`}
                    alt={cat}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    data-ai-hint={`editorial fashion ${cat}`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-black text-5xl text-white italic tracking-tighter group-hover:scale-110 transition-transform drop-shadow-2xl">{cat}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
              <div>
                <h2 className="text-7xl md:text-9xl font-black font-headline text-black tracking-tighter uppercase leading-[0.8] mb-6">NEW <br/><span className="text-primary italic">ARRIVALS.</span></h2>
              </div>
              <Button asChild variant="link" className="text-primary font-black text-xl group p-0 hover:no-underline">
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
        <section className="py-40 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-7xl md:text-9xl font-black font-headline mb-12 uppercase italic leading-[0.8] tracking-tighter">
              BEYOND <br/>TRENDS.
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-16 font-medium leading-tight tracking-tight uppercase">
              Curating the world's most sought-after garments. From vintage luxury to modern streetwear icons.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-16 py-10 text-2xl font-black transition-all hover:scale-105">
              JOIN THE CIRCLE
            </Button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none text-[30vw] font-black italic whitespace-nowrap">
            TOP TIER
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
