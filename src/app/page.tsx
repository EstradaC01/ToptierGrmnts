
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Leaf, TrendingUp } from 'lucide-react';
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
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="https://picsum.photos/seed/hero/1920/1080"
              alt="Thrift store hero"
              fill
              className="object-cover grayscale"
              priority
              data-ai-hint="thrift store"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 text-white border-none mb-6 backdrop-blur-sm px-4 py-1">
                New arrivals every Monday
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white font-headline leading-[1.1] mb-6">
                Sustainable Style <br/>
                <span className="text-white/60">Redefined.</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl font-body leading-relaxed">
                Discover curated vintage and pre-loved garments that don't cost the Earth. 
                Unique finds for your unique self.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-7 text-lg font-bold">
                  <Link href="/shop">Shop Collection <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-7 text-lg font-bold backdrop-blur-sm">
                  Bulk Inquiries
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Eco-Conscious</h4>
                  <p className="text-sm text-muted-foreground">Reduced waste, better planet.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Hand-Picked</h4>
                  <p className="text-sm text-muted-foreground">Quality inspection on every item.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Modern Finds</h4>
                  <p className="text-sm text-muted-foreground">Always trending, never boring.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold font-headline text-primary">NEW ARRIVALS</h2>
                <p className="text-muted-foreground text-lg">Fresh thrift finds from this week's drop.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold text-lg group p-0">
                <Link href="/shop" className="flex items-center">
                  VIEW ALL ITEMS <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Shortcuts */}
        <section className="py-20 border-t bg-white">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-primary mb-4 uppercase tracking-tighter">Shop by Category</h2>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Men', 'Women', 'Kids', 'Accessories'].map((cat, i) => (
              <Link 
                key={cat} 
                href={`/shop?cat=${cat}`}
                className="group relative h-64 overflow-hidden rounded-2xl flex items-center justify-center"
              >
                <Image
                  src={`https://picsum.photos/seed/cat${i}/600/600`}
                  alt={cat}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint={`clothing ${cat}`}
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                <h3 className="relative z-10 text-3xl font-bold text-white font-headline uppercase">{cat}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Community Callout */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold font-headline mb-6 uppercase">Thrift with a Purpose</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Every item you purchase helps prevent clothes from ending up in landfills. 
              Join thousands of Filipinos making the switch to sustainable fashion.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-10 py-7 text-lg font-bold">
                Follow Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Re-defining Badge since we can't easily import it here in the middle of standard Next.js without some pathing
import { Badge } from '@/components/ui/badge';
