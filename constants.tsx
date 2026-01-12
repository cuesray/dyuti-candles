
import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nidra',
    description: 'A deep, restful blend of wild lavender and sandalwood.',
    sensoryNote: 'Dusk, velvet, quietude.',
    price: '₹1,850',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Prana',
    description: 'Crisp citrus paired with the grounding warmth of cedarwood.',
    sensoryNote: 'Morning mist, cedar, renewal.',
    price: '₹1,850',
    image: 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Sattva',
    description: 'Pure jasmine and white tea for mental clarity.',
    sensoryNote: 'Clarity, petals, sunlight.',
    price: '₹1,950',
    image: 'https://images.unsplash.com/photo-1572726710706-7ee75fa9fde3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Mati',
    description: 'The scent of rain on dry earth—petrichor and vetiver.',
    sensoryNote: 'First rain, clay, homecoming.',
    price: '₹2,100',
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "A ritual I look forward to every evening. The glow is truly soft, just as the name suggests.",
    author: "Ananya M."
  },
  {
    id: 't2',
    quote: "Finally, a scent that doesn't overwhelm, but gently holds the room.",
    author: "Vikram R."
  }
];
