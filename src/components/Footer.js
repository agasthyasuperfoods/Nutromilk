// import { Facebook, Instagram, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Contact Section */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
//           Get in Touch
//         </h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//           We’d love to hear from you! Reach out for any questions, feedback, or partnership opportunities.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Contact Form */}
//           <form className="bg-gray-50 rounded-2xl shadow-lg p-8 space-y-6">
//             <div>
//               <label className="block text-gray-700 font-medium">Name</label>
//               <input
//                 type="text"
//                 className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Message</label>
//               <textarea
//                 rows={4}
//                 className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Type your message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Contact Details */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <MapPin className="text-yellow-500 w-6 h-6" />
//               <p>
//                 One West - A Terminus Project (ADP Building), Narsingi Nanakramguda Service Rd,
//                 Financial District, Nanakramguda, Rangareddy Dist, Telangana, INDIA, 500008
//               </p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Mail className="text-yellow-500 w-6 h-6" />
//               <a href="mailto:wecare.anm@agasthya.co.in" className="hover:text-yellow-600">
//                 wecare.anm@agasthya.co.in
//               </a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Phone className="text-yellow-500 w-6 h-6" />
//               <p>
//                 +91 81210 01774, +91 87120 08651
//               </p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <MessageSquare className="text-green-500 w-6 h-6" />
//               <a href="https://wa.me/918121001774" className="hover:text-yellow-600">
//                 Chat on WhatsApp
//               </a>
//             </div>

//             {/* Google Map */}
//             <div className="mt-6">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.428674895205!2d78.343!3d17.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e6d111111%3A0x111111111111111!2sOne%20West%20-%20ADP%20Building!5e0!3m2!1sen!2sin!4v169434567890"
//                 width="100%"
//                 height="250"
//                 className="rounded-xl border"
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">Agasthya Nutro Milk</h3>
//             <p>
//               Freshness from farm to your family table.  
//               Pure, nutritious, and trusted dairy products.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-yellow-500">Home</a></li>
//               <li><a href="/products" className="hover:text-yellow-500">Products</a></li>
//               <li><a href="/farmers" className="hover:text-yellow-500">Farmers</a></li>
//               <li><a href="/about" className="hover:text-yellow-500">About</a></li>
//               <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" className="p-3 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
//                 <Facebook className="text-white" />
//               </a>
//               <a href="https://instagram.com" className="p-3 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
//                 <Instagram className="text-white" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="text-center text-gray-500 mt-8 text-sm">
//           © {new Date().getFullYear()} Agasthya Nutro Milk Pvt. Ltd. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }
// src/components/Footer.tsx
// src/components/Footer.tsx


"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Splash divider (optional) */}
      <div className="absolute -top-px left-0 right-0 h-16 sm:h-24 md:h-32">
        <Image
          src="/splash-wave.png"         // ensure this exists in /public
          alt="Milk splash divider"
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority
        />
      </div>

      <div className="relative z-10 bg-stone-100 pt-24 pb-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8 px-6 lg:px-8 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/Logo.png"             // ensure this exists in /public
              alt="Agasthya Nutro Milk logo"
              width={150}
              height={150}
              className="shrink-0 object-contain"
              priority
            />
            <p className="mt-4 max-w-xs text-base leading-relaxed text-slate-600">
              Freshness from farm to your family table. Pure, nutritious, and trusted dairy products.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold text-slate-800">PRODUCTS</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/products/milk" className="text-slate-700 hover:text-amber-500">
                  Farm Fresh Milk
                </Link>
              </li>
              <li>
                <Link href="/products/eggs" className="text-slate-700 hover:text-amber-500">
                  Country Eggs
                </Link>
              </li>
              <li>
                <Link href="/products/fruits" className="text-slate-700 hover:text-amber-500">
                  Seasonal Fruits
                </Link>
              </li>
              <li>
                <Link href="/products/vegetables" className="text-slate-700 hover:text-amber-500">
                  Fresh Vegetables
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-700 hover:text-amber-500">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-slate-800">QUICK LINKS</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="text-slate-700 hover:text-amber-500">Home</Link></li>
              <li><Link href="/farmers" className="text-slate-700 hover:text-amber-500">Farmers</Link></li>
              <li><Link href="/about" className="text-slate-700 hover:text-amber-500">About Us</Link></li>
              <li><Link href="/careers" className="text-slate-700 hover:text-amber-500">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-700 hover:text-amber-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social — static brand colors */}
          <div>
            <h3 className="text-base font-bold text-slate-800">FOLLOW US</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-3 bg-[#1877F2] ring-1 ring-[#1877F2] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Facebook className="h-5 w-5 text-white" />
              </Link>

              {/* Instagram (static gradient) */}
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-3 shadow-sm ring-1 ring-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{
                  background:
                    "linear-gradient(135deg,#F58529 0%,#DD2A7B 45%,#8134AF 100%)",
                }}
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-3 bg-[#0A66C2] ring-1 ring-[#0A66C2] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-3 bg-[#FF0000] ring-1 ring-[#FF0000] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Youtube className="h-5 w-5 text-white" />
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-600">Be part of our community.</p>
          </div>
        </div>
      </div>

      <div className="bg-stone-50 py-6 text-center text-sm text-slate-500">
        <p>© 2025 Agasthya Nutro Milk Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
