import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-16">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
                <Zap className="h-4 w-4 fill-current" />
                WEEKLY DROP IS LIVE
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[0.9] mb-8 tracking-tighter">
                THRIFT <br/>
                <span className="text-primary italic">LOUDER.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg font-body leading-relaxed font-medium">
                Ditch the fast fashion cycle. Grab curated, high-voltage vintage pieces that make a statement without the environmental baggage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-2xl px-10 py-8 text-xl font-black shadow-pop">
                  <Link href="/shop">SHOP THE DROP <ArrowRight className="ml-2 h-6 w-6" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-2xl px-10 py-8 text-xl font-black">
                  SELL YOURS
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square hidden lg:block">
              <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 shadow-pop-accent" />
              <div className="absolute inset-0 bg-primary rounded-[3rem] -rotate-3 overflow-hidden border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/hero-pop/1000/1000"
                  alt="Streetwear fashion"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="streetwear fashion"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border-2 border-primary rotate-6">
                <div className="flex items-center gap-1 text-primary mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-black text-sm">"Best vintage in QC!"</p>
                <p className="text-xs text-muted-foreground">@vibe_check_99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories - Poppy Circles */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['Men', 'Women', 'Kids', 'Accessories'].map((cat, i) => (
                <Link key={cat} href={`/shop?cat=${cat}`} className="group flex flex-col items-center gap-4">
                  <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Image
                      src={`https://picsum.photos/seed/cat-pop-${i}/400/400`}
                      alt={cat}
                      fill
                      className="object-cover"
                      data-ai-hint={`fashion ${cat}`}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-black text-xl md:text-2xl uppercase tracking-tighter group-hover:text-primary">{cat}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
              <div>
                <h2 className="text-5xl md:text-7xl font-black font-headline text-black tracking-tighter uppercase italic">Hot Right Now</h2>
                <div className="h-2 w-32 bg-accent mt-2" />
              </div>
              <Button asChild variant="link" className="text-primary font-black text-xl group p-0 hover:no-underline">
                <Link href="/shop" className="flex items-center">
                  SEE EVERYTHING <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto/Community */}
        <section className="py-24 bg-black text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden whitespace-nowrap text-[20vw] font-black leading-none">
            VINTAGE VINTAGE VINTAGE VINTAGE
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black font-headline mb-8 uppercase italic leading-none">
              Wear the <span className="text-accent underline decoration-white underline-offset-8">Future</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 font-medium leading-relaxed">
              Fast fashion is boring. We find the gems that tell a story. 
              Join the 10,000+ style rebels who are saving the planet, one thrift at a time.
            </p>
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-2xl px-12 py-9 text-2xl font-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
              JOIN THE FAM
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}