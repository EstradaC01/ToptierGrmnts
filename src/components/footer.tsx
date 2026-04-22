
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-primary-foreground/10 pb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline">TOPTIER - grmnts</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Giving clothes a second life. Curated thrift finds for the modern Filipino lifestyle. 
              Join our community of sustainable fashion lovers.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/shop?cat=Men" className="hover:text-primary-foreground">Men's Collection</a></li>
              <li><a href="/shop?cat=Women" className="hover:text-primary-foreground">Women's Collection</a></li>
              <li><a href="/shop?cat=Kids" className="hover:text-primary-foreground">Kids' Collection</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Sustainability Mission</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 font-headline">Visit Us</h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="h-5 w-5 shrink-0" />
              <p>123 Thrift Avenue, Quezon City, Metro Manila, Philippines</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <Clock className="h-5 w-5 shrink-0" />
              <div>
                <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p>Sun: 12:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 font-headline">Inquiries</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Contact us on Messenger for bulk inquiries or special requests.
            </p>
            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg border border-white/20">
              <CreditCard className="h-5 w-5 text-primary-foreground/70" />
              <span className="text-sm">We accept <strong>GCash</strong>, Maya, and BDO.</span>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} TopTier Thrift Finds. All rights reserved. Proudly Filipino.</p>
        </div>
      </div>
    </footer>
  );
}
