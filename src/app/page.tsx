import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Star, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const newArrivals = PlaceHolderImages.slice(0, 8).map((img, index) => ({
    id: img.id,
    name: img.description,
    price: 150 + Math.floor(Math.random() * 850),
    category: ['Men', 'Women', 'Kids', 'Accessories'][index % 4],
    imageUrl: img.imageUrl,
    imageHint: img.imageHint,
    condition: ['Excellent', 'Gently Used', 'Like New'][index % 3],
    size: ['S', 'M', 'L', 'XL', 'Free Size'][index % 5],
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background pt-24 pb-12">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-2.5 rounded-full font-black text-sm mb-8 animate-pulse border border-primary/20">
                <Leaf className="h-4 w-4" />
                CONSCIOUS CURATION
              </div>
              <h1 className="text-7xl md:text-[9rem] font-black font-headline leading-[0.8] mb-10 tracking-tighter uppercase italic">
                THRIFT <br/>
                <span className="text-primary not-italic">GREENER.</span>
              </h1>
              <p className="text-2xl text-foreground/80 mb-12 max-w-xl font-medium leading-tight">
                Quality vintage that doesn't cost the Earth. Hand-picked pieces for the modern conscious wardrobe.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-[2rem] px-12 py-10 text-2xl font-black shadow-pop transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_rgba(27,77,46,0.3)]">
                  <Link href="/shop" className="flex items-center gap-3">EXPLORE DROP <ArrowRight className="h-8 w-8" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-4 border-primary text-primary hover:bg-primary/5 rounded-[2rem] px-12 py-10 text-2xl font-black">
                  SELL WITH US
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square hidden lg:block group">
              <div className="absolute inset-0 bg-accent rounded-[4rem] rotate-3 shadow-pop-accent opacity-20" />
              <div className="absolute inset-0 bg-primary rounded-[4rem] -rotate-3 overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                <Image
                  src="https://picsum.photos/seed/eco-hero/1200/1200"
                  alt="Sustainable streetwear"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="sustainable fashion"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-primary rotate-12 transition-transform hover:rotate-0 duration-300">
                <div className="flex items-center gap-1 text-primary mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="font-black text-lg text-black">"Earth friendly & fresh."</p>
                <p className="text-sm font-bold text-primary">@sustainable_style</p>
              </div>
            </div>
          </div>
        </section>

        {/* Poppy Category Bubbles */}
        <section className="py-24 bg-white border-y-8 border-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
              {['Men', 'Women', 'Kids', 'Accessories'].map((cat, i) => (
                <Link key={cat} href={`/shop?cat=${cat}`} className="group flex flex-col items-center gap-6">
                  <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border-8 border-background shadow-2xl group-hover:scale-105 group-hover:border-primary transition-all duration-500">
                    <Image
                      src={`https://picsum.photos/seed/cat-eco-${i}/600/600`}
                      alt={cat}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      data-ai-hint={`vintage ${cat}`}
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-black text-3xl uppercase tracking-tighter group-hover:text-primary transition-colors underline decoration-transparent group-hover:decoration-primary decoration-4 underline-offset-8">{cat}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-6xl md:text-9xl font-black font-headline text-black tracking-tighter uppercase leading-none mb-6">Latest <br/><span className="text-primary italic">Finds.</span></h2>
                <p className="text-xl font-medium text-foreground/60 uppercase tracking-widest">New arrivals every Monday at 8pm</p>
              </div>
              <Button asChild variant="link" className="text-primary font-black text-2xl group p-0 hover:no-underline mb-4">
                <Link href="/shop" className="flex items-center gap-3">
                  VIEW FULL ARCHIVE <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-3" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-32 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center whitespace-nowrap text-[30vw] font-black italic">
            CIRCULAR
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
            <h2 className="text-6xl md:text-[10rem] font-black font-headline mb-12 uppercase italic leading-[0.8]">
              Waste <span className="text-accent underline decoration-white underline-offset-[20px]">Less.</span> Style More.
            </h2>
            <p className="text-2xl md:text-4xl text-white/80 mb-16 font-medium leading-tight max-w-4xl mx-auto">
              Every garment we rescue is one less piece in a landfill. We're building a wardrobe that lasts generations, not seasons.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-[2.5rem] px-16 py-12 text-3xl font-black shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              JOIN THE REVOLUTION
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}