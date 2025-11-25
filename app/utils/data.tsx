import { Camera, Zap, DollarSign, User, Mail, Send, CheckCircle, Tag, Package, Star } from 'lucide-react';

// Pricing data in English (kept unchanged)
const pricingPackages = [
  {
    name: "Standard Reel Package",
    reels: 5,
    price: 3500,
    features: [
      "5 High-Quality Video Reels",
      "Original Music and Text Overlays",
      "2 Revision Cycles",
      "3-Day Delivery",
    ],
    color: "bg-indigo-500",
    shadow: "shadow-indigo-500/50",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    name: "Pro Reel Package",
    reels: 7,
    price: 4000,
    features: [
      "7 Premium Video Reels",
      "Trending Audio and Special Effects",
      "Unlimited Revisions",
      "Fast 48-Hour Delivery",
      "Content Strategy Consultation",
    ],
    color: "bg-pink-500",
    shadow: "shadow-pink-500/50",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Enterprise Reel Package",
    reels: 10,
    price: 5000,
    features: [
      "10 Exclusive Video Reels",
      "Branding and Logo Integration",
      "Original Script Writing",
      "Lifetime Access (Cloud Backup)",
      "Optimized for All Social Media Formats",
    ],
    color: "bg-teal-500",
    shadow: "shadow-teal-500/50",
    icon: <DollarSign className="w-6 h-6" />,
  },
];

// Ad services data in English (kept unchanged)
const adServices = [
  {
    title: "Product Ads",
    description: "Promote your products with attractive advertisements. High-conversion videos that boost sales, including product demos and unboxing content.",
    icon: <Package className="w-8 h-8 text-white" />,
    color: "bg-red-500",
  },
  {
    title: "Service Ads",
    description: "Showcase the impact of your services. Professional videos that build trust and generate leads, including customer testimonials and service overviews.",
    icon: <Tag className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
  },
];

// Portfolio data structure (kept unchanged)
const portfolioItems = [
    {
      title: "E-Commerce Launch Campaign",
      client: "Fashion Brand X",
      description: "A series of 10 rapid-fire reels focused on product styling and customer testimonials, leading to a 40% increase in weekly sales.",
      image: "https://placehold.co/400x300/e0f2f1/0f766e?text=Fashion+Reel",
    },
    {
      title: "Fitness Service Promotion",
      client: "Gym Chain Y",
      description: "Developed 7 high-energy workout challenge reels and trainer introductions. Drove 500+ sign-ups for the new virtual training program.",
      image: "https://placehold.co/400x300/fecaca/991b1b?text=Fitness+Reel",
    },
    {
      title: "Local Restaurant Ad",
      client: "Bistro Z",
      description: "A creative food ad reel showcasing the making of a signature dish, resulting in a 25% increase in weekend foot traffic.",
      image: "https://placehold.co/400x300/fff3e0/e65100?text=Food+Ad",
    },
];


export { pricingPackages, adServices, portfolioItems };
