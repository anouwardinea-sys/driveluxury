// ------------------------------------------------------------------
// Données statiques (dummy data) — aucune API / backend requis.
// ------------------------------------------------------------------

import { asset } from '../utils/asset';

// Les icones sont des references a des composants `lucide-react`
// (voir l'iconMap dans Home.jsx). On evite les emojis : leur rendu
// depend de l'OS et leurs tailles ne sont pas coherentes entre elles.
const categoryList = [
  { id: "suv", name: "SUV", icon: "caravan" },
  { id: "sedan", name: "Sedan", icon: "carFront" },
  { id: "sports", name: "Sports", icon: "flame" },
  { id: "electric", name: "Electric", icon: "zap" },
  { id: "luxury", name: "Luxury", icon: "crown" },
];

export const cars = [
  // ---------------------- Mercedes-Benz ----------------------
  {
    id: 1,
    name: "Mercedes-Benz G-Class",
    category: "luxury",
    price: 320,
    image: asset("/images/benzclass.png"),
    rating: 4.9,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "240 km/h",
    featured: true,
    available: true,
  },
  {
    id: 2,
    name: "Mercedes-Benz GLS Maybach",
    category: "luxury",
    price: 420,
    image: asset("/images/benz1-car.png"),
    rating: 5.0,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "250 km/h",
    featured: true,
    available: true,
  },
  {
    id: 3,
    name: "Mercedes-Benz Classe E",
    category: "sedan",
    price: 290,
    image: asset("/images/benz2.png"),
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "250 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- BMW ----------------------
  {
    id: 4,
    name: "BMW X7 M Sport",
    category: "suv",
    price: 300,
    image: asset("/images/BMW.png"),
    rating: 4.8,
    seats: 6,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "250 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Rolls-Royce ----------------------
  {
    id: 5,
    name: "Rolls-Royce Ghost",
    category: "luxury",
    price: 750,
    image: asset("/images/rollsroce.png"),
    rating: 5.0,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "250 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Range Rover ----------------------
  {
    id: 6,
    name: "Range Rover 2023",
    category: "suv",
    price: 310,
    image: asset("/images/randrover2023.png"),
    rating: 4.9,
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    speed: "235 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Toyota ----------------------
  {
    id: 7,
    name: "Toyota Alphard Famille",
    category: "luxury",
    price: 180,
    image: asset("/images/toyotaFamille.png"),
    rating: 4.7,
    seats: 7,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "200 km/h",
    featured: true,
    available: true,
  },
  {
    id: 8,
    name: "Toyota Land Cruiser 300",
    category: "suv",
    price: 220,
    image: asset("/images/toyotalandcruser1.png"),
    rating: 4.8,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    speed: "210 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Lexus ----------------------
  {
    id: 9,
    name: "Lexus LX 600",
    category: "luxury",
    price: 260,
    image: asset("/images/lexus.png"),
    rating: 4.8,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "210 km/h",
    featured: true,
    available: true,
  },
  {
    id: 10,
    name: "Lexus UX 250h",
    category: "suv",
    price: 150,
    image: asset("/images/lexus2.png"),
    rating: 4.6,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "190 km/h",
    featured: false,
    available: true,
  },

  // ---------------------- Audi ----------------------
  {
    id: 11,
    name: "Audi Q3 Sportback",
    category: "suv",
    price: 190,
    image: asset("/images/audi.png"),
    rating: 4.7,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "220 km/h",
    featured: true,
    available: true,
  },
  {
    id: 12,
    name: "Audi e-tron Sportback",
    category: "electric",
    price: 240,
    image: asset("/images/audi2.png"),
    rating: 4.8,
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    speed: "200 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Ford ----------------------
  {
    id: 13,
    name: "Ford Explorer",
    category: "suv",
    price: 170,
    image: asset("/images/ford2.png"),
    rating: 4.5,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "200 km/h",
    featured: false,
    available: true,
  },

  // ---------------------- Hyundai ----------------------
  {
    id: 14,
    name: "Hyundai Tucson",
    category: "suv",
    price: 130,
    image: asset("/images/hyndai.png"),
    rating: 4.6,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "195 km/h",
    featured: false,
    available: true,
  },

  // ---------------------- Ferrari ----------------------
  {
    id: 15,
    name: "Ferrari 488 GTB",
    category: "sports",
    sporty: true,
    price: 890,
    image: asset("/images/ferrari.png"),
    rating: 5.0,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "330 km/h",
    featured: true,
    available: true,
  },
  {
    id: 16,
    name: "Ferrari F8 Tributo",
    category: "sports",
    sporty: true,
    price: 950,
    image: asset("/images/ferrari2.png"),
    rating: 5.0,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "340 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Lamborghini ----------------------
  {
    id: 17,
    name: "Lamborghini Huracán",
    category: "sports",
    sporty: true,
    price: 900,
    image: asset("/images/lambo.png"),
    rating: 5.0,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "325 km/h",
    featured: true,
    available: true,
  },
  {
    id: 18,
    name: "Lamborghini Aventador",
    category: "sports",
    sporty: true,
    price: 1100,
    image: asset("/images/lambo2.png"),
    rating: 5.0,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "350 km/h",
    featured: true,
    available: true,
  },

  // ---------------------- Suzuki ----------------------
  {
    id: 19,
    name: "Suzuki Baleno",
    category: "sedan",
    price: 110,
    image: asset("/images/suziki.png"),
    rating: 4.5,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    speed: "180 km/h",
    featured: false,
    available: true,
  },

  // ---------------------- Honda ----------------------
  {
    id: 20,
    name: "Honda Vezel",
    category: "suv",
    price: 160,
    image: asset("/images/honda.png"),
    rating: 4.6,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "190 km/h",
    featured: false,
    available: true,
  },

  // ---------------------- Kia ----------------------
  {
    id: 21,
    name: "Kia Sportage",
    category: "suv",
    price: 175,
    image: asset("/images/kiasportagered.png"),
    rating: 4.7,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    speed: "200 km/h",
    featured: false,
    available: true,
  },
];

// Catégories enrichies d'un compteur calculé depuis la flotte réelle,
// pour que les chiffres restent justes si tu ajoutes ou retires un véhicule.
export const categories = categoryList.map((cat) => ({
  ...cat,
  count: cars.filter((c) => c.category === cat.id).length,
}));

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Business Traveler",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    text: "Absolutely seamless experience. The car was spotless, the pickup took under five minutes, and the support team was available around the clock. DriveLuxury is now my go-to.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Weekend Explorer",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    text: "I rented a convertible for a coastal road trip and it was perfect. Transparent pricing, no hidden fees, and the car felt brand new. Highly recommended.",
  },
  {
    id: 3,
    name: "Amelia Rossi",
    role: "Photographer",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    text: "The premium fleet genuinely impressed me. Beautiful vehicles, easy booking flow, and a team that actually cares. This is how car rental should feel.",
  },
];

export const faqs = [
  {
    q: "What documents do I need to rent a car?",
    a: "You only need a valid driver license, a national ID or passport, and a credit card for the security deposit. Everything can be uploaded directly during checkout.",
  },
  {
    q: "Is insurance included in the price?",
    a: "Yes. Every rental includes basic third-party insurance. Full coverage with zero deductible can be added as an optional extra on any vehicle.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Absolutely. You can cancel or reschedule free of charge up to 24 hours before your pickup time, directly from your booking confirmation.",
  },
  {
    q: "Do you offer delivery to my location?",
    a: "We offer door-to-door delivery and collection in most major cities. Simply select the delivery option when booking and tell us your address.",
  },
  {
    q: "Is there a mileage limit?",
    a: "All rentals include unlimited mileage on standard plans, so you are free to enjoy the road without keeping an eye on the odometer.",
  },
];

export const steps = [
  {
    id: 1,
    title: "Choose Your Car",
    text: "Browse our curated fleet and pick the vehicle that matches your style and budget.",
    icon: "car",
  },
  {
    id: 2,
    title: "Book in Seconds",
    text: "Select your dates and location, then confirm your reservation online with no paperwork.",
    icon: "calendar",
  },
  {
    id: 3,
    title: "Pick Up & Drive",
    text: "Collect your keys at the counter or get the car delivered straight to your door.",
    icon: "key",
  },
  {
    id: 4,
    title: "Enjoy the Ride",
    text: "Hit the road with full insurance, 24/7 support and unlimited mileage included.",
    icon: "road",
  },
];

export const features = [
  {
    title: "Premium Fleet",
    text: "Hand-picked, meticulously maintained vehicles from the world most trusted brands.",
    icon: "shield",
  },
  {
    title: "Transparent Pricing",
    text: "What you see is what you pay. No hidden fees, no surprises at checkout.",
    icon: "tag",
  },
  {
    title: "24/7 Support",
    text: "Real humans available day and night, wherever the road takes you.",
    icon: "headset",
  },
  {
    title: "Free Cancellation",
    text: "Plans change. Cancel or reschedule up to 24 hours before pickup for free.",
    icon: "refresh",
  },
  {
    title: "Door Delivery",
    text: "We bring the car to you, whether it is your home, office or hotel.",
    icon: "map",
  },
  {
    title: "Unlimited Miles",
    text: "Drive as far as you want on every standard rental plan. No limits.",
    icon: "gauge",
  },
];

export const stats = [
  { value: "120+", label: "Premium Cars" },
  { value: "15k+", label: "Happy Clients" },
  { value: "30+", label: "Cities Covered" },
  { value: "4.9", label: "Average Rating" },
];

export default cars;
