
import React from 'react';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ShopPage() {
  const products = PlaceHolderImages.map((img, index) => ({
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
      
      <main className="flex-grow pt-10 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8">
              <h1 className="text-4xl font-bold font-headline text-primary tracking-tight">ALL GARMENTS</h1>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <Button variant="secondary" className="rounded-full px-6 whitespace-nowrap bg-primary text-white">All Items</Button>
                <Button variant="outline" className="rounded-full px-6 whitespace-nowrap">Men</Button>
                <Button variant="outline" className="rounded-full px-6 whitespace-nowrap">Women</Button>
                <Button variant="outline" className="rounded-full px-6 whitespace-nowrap">Kids</Button>
                <Button variant="outline" className="rounded-full px-6 whitespace-nowrap">Accessories</Button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing <span className="text-foreground font-semibold">{products.length}</span> results</p>
              
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 text-sm font-semibold">
                      Sort: Newest First <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Newest First</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem>Name: A-Z</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline" size="sm" className="gap-2 border-2 rounded-lg md:flex hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="flex flex-col items-center mt-12 gap-4">
              <p className="text-sm text-muted-foreground">Showing 12 of 48 items</p>
              <div className="w-full max-w-xs h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/4" />
              </div>
              <Button variant="outline" size="lg" className="mt-4 px-12 py-6 border-2 font-bold rounded-xl">
                Load More Items
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
