import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const collections = [
    { name: 'LUXURY', cat: 'LUXURY' },
    { name: 'STREETWEAR', cat: 'STREETWEAR' },
    { name: 'SPORTSWEAR', cat: 'SPORTSWEAR' },
    { name: 'FORMAL WEAR', cat: 'FORMAL WEAR' },
    { name: 'GARMENTS & BAG', cat: 'GARMENTS & BAG' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-primary-foreground/10 pb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black font-headline italic tracking-tighter">TOPTIER ARCHIVE</h3>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-widest leading-loose">
              The premium destination for luxury, streetwear, and rare garments. Authenticated, curated, and delivered globally from Metro Manila.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary rounded-none">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary rounded-none">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary rounded-none">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 uppercase tracking-[0.4em]">COLLECTIONS</h4>
            <ul className="space-y-4 text-primary-foreground/50 text-[10px] font-black uppercase tracking-widest">
              {collections.map((item) => (
                <li key={item.cat}>
                  <a href={`/shop?cat=${item.cat}`} className="hover:text-primary-foreground transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-8 uppercase tracking-[0.4em]">THE VAULT</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-[10px] font-black uppercase tracking-widest text-primary-foreground/50">
                <MapPin className="h-4 w-4 shrink-0" />
                <p>Private Showroom, Makati City, Metro Manila</p>
              </div>
              <div className="flex items-start gap-3 text-[10px] font-black uppercase tracking-widest text-primary-foreground/50">
                <Globe className="h-4 w-4 shrink-0" />
                <p>Worldwide Shipping & Logistics</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black mb-8 uppercase tracking-[0.4em]">AUTHENTICITY</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary-foreground/50 leading-loose">
              Every item in our vault undergoes a rigorous 10-point inspection process by our curation specialists.
            </p>
            <div className="bg-primary-foreground/5 p-4 border border-primary-foreground/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-foreground/80">GCASH // MAYA // BDO</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-primary-foreground/30">
          <p>© {new Date().getFullYear()} TOPTIER GARMENTS & ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
