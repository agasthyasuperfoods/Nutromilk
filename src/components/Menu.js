"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const baseLink =
    "relative group transition-colors text-gray-700 hover:text-[#f27f1b] whitespace-nowrap";
  const activeClasses = "text-gray-900 font-semibold after:w-full";
  const underline =
    "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#f27f1b] after:transition-all after:duration-300 group-hover:after:w-full";

  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-all " +
        (scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-gray-200"
          : "bg-white border-gray-100")
      }
    >
      <nav className="mx-auto  px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to home">
            <Image
              src="/Logo.png"
              alt="Agasthya Logo"
                width={300}          // wider
                height={100}          // taller
          priority
            className="h-18 w-auto drop-shadow-sm"
            />
          </Link>
        </div>

        {/* CENTER: Nav Links */}
        <div className="hidden md:flex items-end gap-10 ">
          <Link href="/" className={`${baseLink} ${underline} ${isActive("/") ? activeClasses : ""}`}>
            Home
          </Link>

          {/* Products dropdown */}
          <div className="relative group">
            <button className={`${baseLink} ${underline} flex items-center gap-1`}>
              Products ▾
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-56 z-50">
              <Link href="/products/milk" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Milk</Link>
              <Link href="/products/seasonalfruits" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Seasonal Fruits</Link>
              <Link href="/products/countryeggs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Country Eggs</Link>
              <Link href="/products/vegetables" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Fresh Vegetables</Link>
              <Link href="/products/cereals" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Breakfast cereals</Link>
            </div>
          </div>

          <Link href="/farmers" className={`${baseLink} ${underline} ${isActive("/farmers") ? activeClasses : ""}`}>
            Farmers
          </Link>
          <Link href="/about" className={`${baseLink} ${underline} ${isActive("/about") ? activeClasses : ""}`}>
            About Us
          </Link>
          <Link href="/subscription" className={`${baseLink} ${underline} ${isActive("/subscription") ? activeClasses : ""}`}>
            Subscription
          </Link>
          <Link href="/contact" className={`${baseLink} ${underline} ${isActive("/contact") ? activeClasses : ""}`}>
            Contact
          </Link>
        </div>

        {/* RIGHT: Only App Badges */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </a>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          className="md:hidden ml-auto rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <details>
              <summary className="cursor-pointer">Products</summary>
              <div className="flex flex-col ml-4 mt-2 gap-2">
                <Link href="/products/milk" onClick={() => setOpen(false)}>Milk</Link>
                <Link href="/products/colostrum" onClick={() => setOpen(false)}>Colostrum Milk Pudding</Link>
                <Link href="/products/cheese" onClick={() => setOpen(false)}>Cheese</Link>
                <Link href="/products/vegetables" onClick={() => setOpen(false)}>Fresh Vegetables</Link>
              </div>
            </details>
            <Link href="/farmers" onClick={() => setOpen(false)}>Farmers</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/subscription" onClick={() => setOpen(false)}>Subscription</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="flex items-center gap-3 pt-4">
              <Image src="/app-store-badge.png" alt="App Store" width={120} height={40} className="h-9 w-auto" />
              <Image src="/google-play-badge.png" alt="Google Play" width={120} height={40} className="h-9 w-auto" />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html { scroll-padding-top: 5rem; scroll-behavior: smooth; }
      `}</style>
    </header>
  );
}



// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { X, Menu as MenuIcon } from 'lucide-react';

// export default function Menu() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : 'auto';
//   }, [open]);

//   const isActive = (href) => {
//     if (href === "/") return pathname === "/";
//     return pathname?.startsWith(href);
//   };

//   // --- REFINED Underline Link Styles ---
//   const baseLink = "relative group transition-colors text-slate-700 hover:text-slate-900 py-2";
//   const activeClasses = "text-slate-900 font-semibold after:w-full";
//   const underline = "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 group-hover:after:w-full";

//   return (
//     <header
//       // CHANGED: Back to a solid background, with shadow on scroll
//       className={
//         "sticky top-0 z-50 bg-white border-b transition-shadow " +
//         (scrolled ? "shadow-md border-b-gray-200" : "shadow-none border-b-gray-100")
//       }
//     >
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
//         {/* LEFT: Logo */}
//         <div className="flex items-center">
//           <Link href="/" aria-label="Go to home">
//             <Image
//               src="/Logo.png"
//               alt="Agasthya Logo"
//               width={160}
//               height={50}
//               priority
//               className="h-14 w-auto"
//             />
//           </Link>
//         </div>

//         {/* CENTER: Nav Links with Underline Style */}
//         <div className="hidden lg:flex items-center gap-10">
//           <Link href="/" className={`${baseLink} ${underline} ${isActive("/") ? activeClasses : ""}`}>Home</Link>
//           <Link href="/products" className={`${baseLink} ${underline} ${isActive("/products") ? activeClasses : ""}`}>Products</Link>
//           <Link href="/farmers" className={`${baseLink} ${underline} ${isActive("/farmers") ? activeClasses : ""}`}>Farmers</Link>
//           <Link href="/about" className={`${baseLink} ${underline} ${isActive("/about") ? activeClasses : ""}`}>About Us</Link>
//           <Link href="/subscription" className={`${baseLink} ${underline} ${isActive("/subscription") ? activeClasses : ""}`}>Subscription</Link>
//           <Link href="/contact" className={`${baseLink} ${underline} ${isActive("/contact") ? activeClasses : ""}`}>Contact</Link>
//         </div>

//         {/* RIGHT: App Badges RESTORED */}
//         <div className="hidden lg:flex items-center gap-4">
//           <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
//             <Image src="/app-store-badge.png" alt="Download on the App Store" width={120} height={40} className="h-10 w-auto" />
//           </a>
//           <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
//             <Image src="/google-play-badge.png" alt="Get it on Google Play" width={135} height={40} className="h-10 w-auto" />
//           </a>
//         </div>

//         {/* MOBILE: Hamburger */}
//         <button className="lg:hidden ml-auto p-2" onClick={() => setOpen(true)} aria-label="Open menu">
//           <MenuIcon size={24} className="text-slate-800" />
//         </button>
//       </nav>

//       {/* MOBILE OVERLAY with solid background and same link styles */}
//       {open && (
//         <div className="lg:hidden fixed inset-0 z-50 bg-white">
//           <div className="h-full flex flex-col p-6">
//             <div className="flex items-center justify-between">
//               <Image src="/Logo.png" alt="Agasthya Logo" width={140} height={40} className="h-12 w-auto" />
//               <button onClick={() => setOpen(false)} aria-label="Close menu">
//                 <X size={28} className="text-slate-800" />
//               </button>
//             </div>
            
//             <nav className="mt-16 flex-grow flex flex-col items-center justify-center gap-8 text-xl">
//               <Link href="/" className={`${baseLink} ${isActive("/") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>Home</Link>
//               <Link href="/products" className={`${baseLink} ${isActive("/products") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>Products</Link>
//               <Link href="/farmers" className={`${baseLink} ${isActive("/farmers") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>Farmers</Link>
//               <Link href="/about" className={`${baseLink} ${isActive("/about") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>About Us</Link>
//               <Link href="/subscription" className={`${baseLink} ${isActive("/subscription") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>Subscription</Link>
//               <Link href="/contact" className={`${baseLink} ${isActive("/contact") ? "font-semibold text-slate-900" : ""}`} onClick={() => setOpen(false)}>Contact</Link>
//             </nav>
            
//             <div className="mt-auto flex justify-center gap-4">
//                <a href="https://apps.apple.com/"><Image src="/app-store-badge.png" alt="App Store" width={120} height={40} className="h-10 w-auto" /></a>
//                <a href="https://play.google.com/"><Image src="/google-play-badge.png" alt="Google Play" width={135} height={40} className="h-10 w-auto" /></a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }