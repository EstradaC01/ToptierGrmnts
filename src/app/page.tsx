import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  const newArrivals = [
    {
      id: 'lux-1',
      name: 'VINTAGE OVERSIZED BLAZER',
      price: 18500,
      category: 'LUXURY',
      imageUrl: 'https://www.estetestudio.com/cdn/shop/collections/IMG_0848.jpg?v=1717696982',
      imageHint: 'luxury formal fashion',
      condition: 'MINT',
      size: 'XL',
    },
    {
      id: 'street-1',
      name: 'RAW EDGE DENIM TROUSERS',
      price: 12400,
      category: 'STREETWEAR',
      imageUrl: 'https://us.cernucci.com/cdn/shop/files/VG-JNDE26CJM-M-LB-4_43ead5a1-8c98-4eba-818e-bc32df1372fc.jpg?v=1729257935&width=800',
      imageHint: 'streetwear outfit',
      condition: 'EXCELLENT',
      size: '32',
    },
    {
      id: 'formal-1',
      name: 'STRUCTURED WOOL COAT',
      price: 32000,
      category: 'FORMAL WEAR',
      imageUrl: 'https://imageb.gc-static.com/media/catalog/product/m/n/mng-structured_wool_coat-burgundy-front.jpg',
      imageHint: 'luxury knitwear',
      condition: 'ARCHIVE',
      size: 'L',
    },
    {
      id: 'bag-1',
      name: 'LEATHER TRAVEL BAG',
      price: 24500,
      category: 'GARMENTS & BAG',
      imageUrl: 'https://vonbaer.com/cdn/shop/files/von-baer-grand-large-full-grain-leather-garment-travel-bag-tan-luxury-man-carrying-on-sunset.jpg?v=1745567636&width=500',
      imageHint: 'luxury leather bag',
      condition: 'NEW',
      size: 'OS',
    }
  ];

  const shopCategories = [
    { 
      name: 'LUXURY', 
      desc: 'ARCHIVE COLLECTIONS', 
      image: 'https://www.estetestudio.com/cdn/shop/collections/IMG_0848.jpg?v=1717696982', 
      hint: 'luxury fashion' 
    },
    { 
      name: 'STREETWEAR', 
      desc: 'LIMITED DROPS', 
      image: 'https://us.cernucci.com/cdn/shop/files/VG-JNDE26CJM-M-LB-4_43ead5a1-8c98-4eba-818e-bc32df1372fc.jpg?v=1729257935&width=800', 
      hint: 'streetwear outfit' 
    },
    { 
      name: 'SPORTSWEAR', 
      desc: 'PERFORMANCE ARCHIVE', 
      image: 'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/2d0826c6-34e2-4fd8-829a-61d017dbc883/AS+M+NK+CLUB+PK+TRK+SUIT.png', 
      hint: 'nike track suit' 
    },
    { 
      name: 'FORMAL WEAR', 
      desc: 'TAILORED PIECES', 
      image: 'https://imageb.gc-static.com/media/catalog/product/m/n/mng-structured_wool_coat-burgundy-front.jpg', 
      hint: 'formal blazer' 
    },
    { 
      name: 'GARMENTS & BAG', 
      desc: 'RARE FINDS', 
      image: 'https://vonbaer.com/cdn/shop/files/von-baer-grand-large-full-grain-leather-garment-travel-bag-tan-luxury-man-carrying-on-sunset.jpg?v=1745567636&width=500', 
      hint: 'leather travel bag' 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 font-black text-[10px] tracking-[0.4em] uppercase">
                <ShieldCheck className="h-3 w-3" />
                AUTHENTICATED SHOP // 2026
              </div>
              
              <div className="space-y-6 max-w-[500px]">
                <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-foreground">
                  TOP <br/>
                  TIER <br/>
                  <span className="text-primary not-italic">GRMNTS.</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground font-bold leading-tight tracking-tight uppercase px-4 lg:px-0">
                  THE DEFINITIVE SOURCE FOR LUXURY STREETWEAR AND CURATED ARCHIVE GARMENTS.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 lg:px-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-10 text-xl font-black shadow-pop transition-transform hover:-translate-x-1 hover:-translate-y-1">
                  <Link href="/shop?cat=STREETWEAR" className="flex items-center justify-center gap-3">SHOP THE DROP <ArrowRight className="h-6 w-6" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-12 py-10 text-xl font-black transition-all">
                  SELL COLLECTIONS
                </Button>
              </div>
            </div>
            
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] group overflow-hidden border-4 border-primary shadow-luxury bg-white">
                <Image
                  src="/images/heroimage.jpg"
                  alt="High fashion streetwear hero"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  data-ai-hint="luxury fashion editorial"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-primary text-primary-foreground px-6 py-3 lg:px-8 lg:py-4 font-black text-xl lg:text-2xl rotate-3 shadow-luxury z-20">
                EST. 2024
              </div>
            </div>
          </div>
        </section>

        {/* Category Strip */}
        <section className="bg-primary py-6 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-8 items-center">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex gap-8 items-center">
                <span className="text-primary-foreground font-black text-4xl italic tracking-tighter uppercase">LUXURY ARCHIVE</span>
                <Star className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
                <span className="text-primary-foreground font-black text-4xl italic tracking-tighter uppercase">STREETWEAR DROP</span>
                <Star className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
                <span className="text-primary-foreground font-black text-4xl italic tracking-tighter uppercase">RARE GARMENTS</span>
                <Star className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
              </div>
            ))}
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {shopCategories.map((cat) => (
                <Link key={cat.name} href={`/shop?cat=${cat.name}`} className="group relative aspect-[4/5] overflow-hidden border-2 border-primary/10 shadow-hover">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    data-ai-hint={cat.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70 block mb-2">{cat.desc}</span>
                    <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">{cat.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-32 bg-background border-t border-primary/5">
          <div className="container mx-auto px-0">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 gap-12 md:gap-8 text-center md:text-left px-5 md:px-4">
              <div className="max-w-2xl flex flex-col items-center md:items-start">
                <span className="text-primary font-black tracking-[0.5em] text-xs uppercase mb-4 block">LATEST ARRIVALS</span>
                <h2 className="text-7xl md:text-9xl font-black font-headline text-foreground tracking-tighter uppercase leading-[0.8]">
                  NEW <br/><span className="text-primary italic">PIECES.</span>
                </h2>
              </div>
              <Button asChild variant="link" className="text-foreground font-black text-xl group p-0 hover:no-underline border-b-4 border-primary w-fit">
                <Link href="/shop?cat=LUXURY" className="flex items-center gap-3">
                  EXPLORE ALL ARCHIVES <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-48 bg-primary text-primary-foreground overflow-hidden relative text-center">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <h2 className="text-8xl md:text-[10rem] font-black font-headline mb-12 uppercase italic leading-[0.7] tracking-tighter">
              BEYOND <br/>THE HYPE.
            </h2>
            <p className="text-xl md:text-3xl text-primary-foreground font-bold mb-16 max-w-3xl mx-auto leading-tight uppercase italic">
              CURATING THE WORLD'S MOST SOUGHT-AFTER GARMENTS. AUTHENTICATED BY SPECIALISTS.
            </p>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 rounded-none px-20 py-12 text-3xl font-black transition-all hover:scale-105 shadow-luxury">
              JOIN THE CIRCLE
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-[40vw] font-black italic whitespace-nowrap">
            TOP TIER
          </div>
        </section>

        {/* Visit Our Studio Section */}
        <section id="store-location" className="pt-20 pb-10 bg-background scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase italic mb-4">
                VISIT THE <span className="text-primary">STUDIO.</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/60 font-bold uppercase tracking-tight">
                Experience the collection in person.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Text Info */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-4 border border-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">LOCATION</span>
                      <p className="text-2xl font-black uppercase tracking-tighter leading-none italic">
                        Quezon Boulevard,<br/>Malasiqui, Pangasinan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-4 border border-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">STORE HOURS</span>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm font-bold uppercase tracking-tight max-w-xs">
                        <span className="text-foreground/60">Mon - Fri</span>
                        <span className="text-foreground">9:30 AM – 7:00 PM</span>
                        <span className="text-foreground/60">Sat</span>
                        <span className="text-foreground">10:00 AM – 5:00 PM</span>
                        <span className="text-foreground/60">Sun</span>
                        <span className="text-foreground">10:00 AM – 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-10 text-xl font-black shadow-pop transition-transform hover:-translate-x-1 hover:-translate-y-1">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=Quezon+Boulevard+Malasiqui+Pangasinan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                    GET DIRECTIONS <ArrowRight className="h-6 w-6" />
                  </a>
                </Button>
              </div>

              {/* Right Side: Map Embed */}
              <div className="relative h-[600px] overflow-hidden rounded-[20px] shadow-2xl border border-[#e0e0e0] group transition-all duration-500 hover:shadow-luxury">
                <iframe
                  src="https://maps.google.com/maps?q=Quezon%20Boulevard%2C%20Malasiqui%2C%20Pangasinan&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
