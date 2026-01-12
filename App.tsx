
import React from 'react';
import Navbar from './components/Navbar';
import FadeIn from './components/FadeIn';
import ImageWithPlaceholder from './components/ImageWithPlaceholder';
import { PRODUCTS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#E5E1DD]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-[#F9F7F4]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[120px]"></div>
        </div>
        
        <FadeIn className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
            A soft light for quiet moments.
          </h1>
          <p className="text-sm md:text-base text-[#6C6C68] font-light leading-relaxed mb-10 tracking-wide uppercase px-4">
            Hand-poured intention for your sacred space.
          </p>
          <button className="px-10 py-4 bg-[#3C3C3B] text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-black transition-all duration-500 rounded-sm">
            Explore Candles
          </button>
        </FadeIn>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-24 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <ImageWithPlaceholder 
                src="https://images.unsplash.com/photo-1544450173-8c8757a3160a?auto=format&fit=crop&q=80&w=1200" 
                alt="Slow Living" 
                containerClassName="h-[500px]"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
              />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn delay={200}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A68A64] font-semibold block mb-4">Why Dyuti</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug">
                In Sanskrit, Dyuti means a soft glow—a light that emanates from within.
              </h2>
              <p className="text-[#6C6C68] leading-relaxed mb-6 font-light">
                We believe that the most profound moments of our day are the quietest. The time spent in reflection, the slow transition from afternoon to evening, the soft warmth of a flame.
              </p>
              <p className="text-[#6C6C68] leading-relaxed font-light">
                Dyuti was born out of a desire for mindfulness and slow living. Each candle is poured by hand in small batches, infused with scents designed to ground the spirit and calm the mind.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 md:py-32 px-6 md:px-20 bg-[#FDFCFB]">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-serif italic mb-4">The Permanent Collection</h2>
            <p className="text-xs tracking-[0.2em] uppercase text-[#6C6C68]">Scented with patience and presence</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PRODUCTS.map((product, idx) => (
              <FadeIn key={product.id} delay={idx * 100}>
                <div className="group cursor-pointer">
                  <ImageWithPlaceholder 
                    src={product.image} 
                    alt={product.name}
                    containerClassName="aspect-[4/5] mb-6"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-serif italic">{product.name}</h3>
                      <span className="text-[10px] tracking-widest text-[#6C6C68] uppercase">{product.price}</span>
                    </div>
                    <p className="text-xs text-[#6C6C68] leading-relaxed italic mb-2">{product.sensoryNote}</p>
                    <p className="text-[13px] text-[#3C3C3B] font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <button className="mt-4 text-[10px] tracking-[0.2em] uppercase font-semibold border-b border-[#E5E1DD] pb-1 hover:border-[#3C3C3B] transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-20 bg-[#3C3C3B] text-white">
        <div className="max-w-screen-md mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-snug">
              Creating a sanctuary within your own four walls.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <FadeIn delay={100}>
              <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 text-[#A68A64]">Rituals</h4>
              <p className="text-sm font-light leading-relaxed text-gray-400 italic">Journaling, meditation, or simply being.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 text-[#A68A64]">Ambience</h4>
              <p className="text-sm font-light leading-relaxed text-gray-400 italic">Warm tones and soft shadows for evenings.</p>
            </FadeIn>
            <FadeIn delay={300}>
              <h4 className="text-[11px] tracking-[0.3em] uppercase mb-4 text-[#A68A64]">Gifting</h4>
              <p className="text-sm font-light leading-relaxed text-gray-400 italic">A thoughtful gesture of light and warmth.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Craft & Ingredients */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <ImageWithPlaceholder 
                src="https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Craft" 
                containerClassName="h-[500px]"
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn delay={200}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A68A64] font-semibold block mb-4">Our Craft</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug italic">
                Poured by hand, guided by light.
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Natural Soy Wax</h4>
                  <p className="text-[#6C6C68] text-sm leading-relaxed font-light">Clean burning, biodegradable, and derived from sustainable farms.</p>
                </div>
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Clean Fragrance</h4>
                  <p className="text-[#6C6C68] text-sm leading-relaxed font-light">Fine fragrance oils blended with botanical extracts. No phthalates, no toxins.</p>
                </div>
                <div>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">Cotton Wicks</h4>
                  <p className="text-[#6C6C68] text-sm leading-relaxed font-light">Lead-free, zinc-free cotton wicks for a steady, rhythmic flicker.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gifting */}
      <section className="py-24 bg-[#F9F7F4] text-center px-6">
        <FadeIn className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-6">The Art of Gifting</h2>
          <p className="text-[#6C6C68] text-sm leading-relaxed font-light mb-10 px-4">
            Sometimes, the best gift is a moment of stillness. Our candles come in minimal, plastic-free packaging, ready to be shared with someone special.
          </p>
          <button className="px-10 py-4 border border-[#3C3C3B] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#3C3C3B] hover:text-white transition-all duration-500">
            Browse Gifting
          </button>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-[#F1EFEC]">
        <div className="max-w-screen-md mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 italic">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.id} delay={idx * 150} className="text-center md:text-left">
                <p className="text-[#3C3C3B] font-serif text-lg mb-4">"{t.quote}"</p>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#A68A64]">— {t.author}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFCFB] pt-24 pb-12 px-6 md:px-20 border-t border-[#F1EFEC]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-sm">
              <h2 className="text-2xl font-serif tracking-widest uppercase mb-6">Dyuti</h2>
              <p className="text-[#6C6C68] italic text-sm leading-relaxed font-light">
                "May you find your own soft glow in the quiet corners of your day."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-4">
                <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">Shop</h4>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">All Candles</a>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">Care Guide</a>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">Gifting</a>
              </div>
              <div className="space-y-4">
                <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">Connect</h4>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">Instagram</a>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">Contact</a>
                <a href="#" className="block text-xs text-[#6C6C68] hover:text-black transition-colors">Wholesale</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#F1EFEC] text-[10px] tracking-widest uppercase text-[#A1A19E]">
            <p>© 2024 Dyuti Candle. All Rights Reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
