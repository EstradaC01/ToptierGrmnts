import React from 'react';
import { Facebook, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 border-b border-primary-foreground/10 pb-20">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-4xl font-black font-headline italic tracking-tighter">TOPTIER</h3>
            <p className="text-primary-foreground/60 text-xs font-bold uppercase tracking-[0.3em] italic">
              BEYOND THE HYPE.
            </p>
            <p className="text-primary-foreground/40 text-[10px] uppercase font-black leading-relaxed tracking-widest max-w-xs">
              The definitive source for luxury streetwear and curated archive garments. Authenticated, rare, and high-end.
            </p>
          </div>

          {/* NAV COLUMN */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-foreground/80">NAVIGATION</h4>
            <nav className="flex flex-col gap-4 text-sm font-black uppercase tracking-widest">
              <Link href="/" className="hover:text-primary-foreground/60 transition-colors w-fit underline-offset-4 hover:underline">HOME</Link>
              <Link href="/shop?cat=LUXURY" className="hover:text-primary-foreground/60 transition-colors w-fit underline-offset-4 hover:underline">COLLECTIONS</Link>
              <Link href="/shop?cat=GARMENTS & BAG" className="hover:text-primary-foreground/60 transition-colors w-fit underline-offset-4 hover:underline">GARMENTS & BAG</Link>
              <a href="#store-location" className="flex items-center gap-2 hover:text-primary-foreground/60 transition-colors w-fit underline-offset-4 hover:underline">
                FIND US <ArrowUpRight className="h-3 w-3" />
              </a>
            </nav>
          </div>

          {/* CONNECT COLUMN */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-foreground/80">CONNECT</h4>
            <div className="space-y-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61588167141057" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest hover:text-primary-foreground/60 transition-all"
              >
                <div className="bg-primary-foreground/10 p-2 group-hover:bg-primary-foreground/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </div>
                <span>Top Tier - grmnts</span>
              </a>
              
              <div className="flex items-start gap-4 text-[10px] font-black uppercase tracking-widest text-primary-foreground/40 leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <p>Quezon Boulevard,<br/>Malasiqui, Pangasinan</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-primary-foreground/20">
          <p>© {new Date().getFullYear()} TOPTIER GARMENTS & ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
