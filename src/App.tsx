import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Instagram, MessageCircle, CheckCircle2, Package, Sparkles, ArrowRight, Heart, BadgeCheck } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/80 backdrop-blur-md border-b border-warm-ink/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Camera className="w-6 h-6 text-warm-accent" />
        <span className="serif text-2xl font-semibold tracking-tight">lautora.cam</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
        <a href="#gallery" className="hover:text-warm-accent transition-colors">Gallery</a>
        <a href="#products" className="hover:text-warm-accent transition-colors">Shop</a>
        <a href="#about" className="hover:text-warm-accent transition-colors">About</a>
      </div>
      <a 
        href="https://wa.me/message/OAGIEB364NRTL1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-warm-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        Order Now
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-warm-accent font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Trusted Camera Shop</span>
        <h1 className="serif text-6xl md:text-8xl leading-[0.9] mb-8">
          Aesthetic <br />
          <span className="italic">& Affordable.</span>
        </h1>
        <p className="text-lg opacity-70 max-w-md mb-10 leading-relaxed">
          “Ini serius kamera harga segini… tapi hasilnya kayak gini??” 
          Dapatkan hasil foto vintage & clean tanpa ribet. Cocok banget buat pemula.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-warm-ink text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
            Explore Collection <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-4 px-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-warm-bg object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span className="text-sm opacity-60 font-medium">500+ Happy Customers</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl rotate-2">
          <img 
            src="https://picsum.photos/seed/vintage-camera/800/1000" 
            alt="Vintage Camera" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] -rotate-3">
          <p className="serif italic text-xl mb-2">“Shot on lautora.cam ✨”</p>
          <p className="text-xs opacity-50 uppercase tracking-wider">No filter needed</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="about" className="py-24 bg-white/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-warm-accent/10 rounded-2xl flex items-center justify-center text-warm-accent">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="serif text-2xl">Beginner Friendly</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Tinggal pakai, udah bisa dapet foto vintage & clean tanpa ribet. Kita pilih kamera yang easy to use.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-warm-accent/10 rounded-2xl flex items-center justify-center text-warm-accent">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="serif text-2xl">Fullset & Ready</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Semua kamera kita udah dicek sebelum dikirim, jadi aman & siap dipakai. Fullset dengan aksesoris.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-warm-accent/10 rounded-2xl flex items-center justify-center text-warm-accent">
            <Package className="w-6 h-6" />
          </div>
          <h3 className="serif text-2xl">Safe Packaging</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Packing rapi dengan bubble wrap tebal. Kita fokus jualan, bukan merugikan customer kak ✨
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <h2 className="serif text-5xl text-center">Aesthetic Results</h2>
      <p className="text-center opacity-50 mt-4 uppercase tracking-widest text-sm">Real shots from our cameras</p>
    </div>
    
    <div className="flex gap-6 animate-marquee whitespace-nowrap">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="w-[300px] aspect-[3/4] rounded-3xl overflow-hidden flex-shrink-0 shadow-lg">
          <img 
            src={`https://picsum.photos/seed/aesthetic${i}/600/800?grayscale`} 
            alt="Gallery" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={`dup-${i}`} className="w-[300px] aspect-[3/4] rounded-3xl overflow-hidden flex-shrink-0 shadow-lg">
          <img 
            src={`https://picsum.photos/seed/aesthetic${i}/600/800?grayscale`} 
            alt="Gallery" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  </section>
);

const Products = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    { name: "Sony Cyber-shot (Pink Edition)", price: "Rp 200.000", img: "input_file_4.png", category: "Digital Cameras" },
    { name: "Canon S95 (Pro Black)", price: "Rp 200.000", img: "input_file_3.png", category: "Digital Cameras" },
    { name: "Fujifilm Instax Mini 12", price: "Rp 200.000", img: "https://picsum.photos/seed/instax1/600/600", category: "Instant Cameras" },
    { name: "Olympus Trip 35 (Film)", price: "Rp 200.000", img: "https://picsum.photos/seed/film1/600/600", category: "Film Cameras" },
    { name: "Sony Cyber-shot (Classic Silver)", price: "Rp 200.000", img: "input_file_0.png", category: "Digital Cameras" },
    { name: "Polaroid Now+ (White)", price: "Rp 200.000", img: "https://picsum.photos/seed/polaroid1/600/600", category: "Instant Cameras" },
    { name: "Sony Cyber-shot (Slim Silver)", price: "Rp 200.000", img: "input_file_1.png", category: "Digital Cameras" },
    { name: "Canon AE-1 (Vintage Film)", price: "Rp 200.000", img: "https://picsum.photos/seed/film2/600/600", category: "Film Cameras" },
    { name: "Sony Cyber-shot (Vintage Silver)", price: "Rp 200.000", img: "input_file_2.png", category: "Digital Cameras" },
    { name: "Canon IXUS (Metallic Silver)", price: "Rp 200.000", img: "input_file_5.png", category: "Digital Cameras" },
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['All', 'Digital Cameras', 'Instant Cameras', 'Film Cameras'];

  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="serif text-5xl">Ready Stock</h2>
            <p className="opacity-50 mt-2">Limited items available</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-warm-ink text-white' 
                    : 'bg-warm-bg border border-warm-ink/10 hover:border-warm-ink/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.name}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-6 relative">
                  <img 
                    src={product.img.startsWith('http') ? product.img : `https://storage.googleapis.com/m-infra.appspot.com/public/res/ais/ais-dev-jysvtcnupn7batlewcbh2w-49406199467.asia-southeast1.run.app/${product.img}`} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Ready
                  </div>
                  <div className="absolute bottom-4 left-4 bg-warm-ink/80 backdrop-blur px-3 py-1 rounded-full text-[8px] text-white font-bold uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>
                <h3 className="serif text-2xl mb-1">{product.name}</h3>
                <p className="text-warm-accent font-medium mb-4">{product.price}</p>
                <div className="flex items-center gap-2 text-xs opacity-50 uppercase tracking-tighter">
                  <CheckCircle2 className="w-3 h-3" /> Fullset • <CheckCircle2 className="w-3 h-3" /> Tested
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const InstagramVerified = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="serif text-4xl mb-2">Official Instagram</h2>
        <p className="opacity-50 uppercase tracking-widest text-xs">Trusted & Verified Account</p>
      </div>
      
      <div className="bg-warm-bg/30 rounded-[48px] p-8 md:p-12 border border-warm-ink/5 flex flex-col md:flex-row items-center gap-12">
        <div className="relative">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img 
              src="https://storage.googleapis.com/m-infra.appspot.com/public/res/ais/ais-dev-jysvtcnupn7batlewcbh2w-49406199467.asia-southeast1.run.app/input_file_1.png" 
              alt="Lautora.cam Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
            <BadgeCheck className="w-8 h-8 text-blue-500 fill-blue-500 text-white" />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <h3 className="serif text-4xl font-bold tracking-tight">lautora.cam</h3>
            <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-500 text-white" />
          </div>
          <p className="text-sm font-medium text-blue-600 mb-4">Instagram sudah Terverifikasi</p>
          
          <div className="flex gap-8 justify-center md:justify-start mb-8 text-sm font-medium uppercase tracking-widest opacity-60">
            <div className="flex flex-col md:flex-row md:gap-1 items-center"><span className="text-warm-ink font-bold">401</span> Postings</div>
            <div className="flex flex-col md:flex-row md:gap-1 items-center"><span className="text-warm-ink font-bold">10.5K</span> Followers</div>
          </div>

          <div className="space-y-2 text-sm font-medium opacity-70 mb-8">
            <p className="flex items-center gap-3 justify-center md:justify-start">📸 DIGICAM READY STOCK</p>
            <p className="flex items-center gap-3 justify-center md:justify-start">✨ hasil aesthetic & vintage</p>
            <p className="flex items-center gap-3 justify-center md:justify-start">💰 harga mulai 200K</p>
            <p className="flex items-center gap-3 justify-center md:justify-start">📦 kirim seluruh Indonesia</p>
            <p className="flex items-center gap-3 justify-center md:justify-start">⚡ siapa cepat dia dapat</p>
            <p className="flex items-center gap-3 justify-center md:justify-start">💌 DM sekarang! 👇</p>
          </div>

          <a 
            href="https://instagram.com/lautora.cam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-warm-ink text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Visit Verified Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [serverStatus, setServerStatus] = React.useState<string>('Checking...');

  React.useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setServerStatus(data.message))
      .catch(() => setServerStatus('Offline'));
  }, []);

  return (
    <footer className="py-20 bg-warm-ink text-white/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Camera className="w-6 h-6" />
              <span className="serif text-2xl">lautora.cam</span>
            </div>
            <p className="text-xl serif italic opacity-70 max-w-sm mb-10">
              “Kita di sini fokus jualan, bukan merugikan customer kak ✨”
            </p>
            <div className="flex gap-6 mb-8">
              <a href="#" className="hover:text-warm-accent transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-warm-accent transition-colors"><MessageCircle className="w-6 h-6" /></a>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-30 flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${serverStatus.includes('running') ? 'bg-green-500' : 'bg-red-500'}`} />
              Server Status: {serverStatus}
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
            <h4 className="serif text-3xl mb-4">Ready to order?</h4>
            <p className="opacity-60 mb-8">Langsung klik WhatsApp di bio lautora.cam ya kak 🤍 sebelum kehabisan!</p>
            <a 
              href="https://wa.me/message/OAGIEB364NRTL1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-white text-warm-ink py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-warm-accent hover:text-white transition-all"
            >
              Chat via WhatsApp <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest opacity-40">
          <p>© 2026 LAUTORA.CAM • TRUSTED CAMERA SHOP</p>
          <div className="flex gap-8">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-warm-accent selection:text-white">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Products />
      <InstagramVerified />
      <Footer />
    </div>
  );
}
