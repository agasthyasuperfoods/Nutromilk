// components/Map.js
import React, { useRef } from "react";

/**
 * Map.js
 * - Left: vertically centered cards (title + details vertically centered relative to image)
 * - Right: embedded Google My Maps iframe (non-interactive to preserve page scroll)
 *
 * Save/replace: components/Map.js
 */

export default function Map() {
  const iframeRef = useRef(null);

  const locations = [
    {
      id: "tandur",
      title: "Agasthya Nutromilk — Tandur",
      image: "/cow.jpg",
      details:
        "Tandur farm — operational unit. Address: Tandur, Telangana. Tandur farm — operational unit. Address: Tandur, Telangana. Tandur farm — operational unit. Address: Tandur, Telangana.",
    },
    {
      id: "talakondapally",
      title: "Agasthya Nutromilk — Talakondapally",
      image: "/tandur3.jpeg",
      details:
        "Talakondapally farm — operational unit. Address: Talakondapally, Telangana. Tandur farm — operational unit. Address: Tandur, Telangana. Tandur farm — operational unit. Address: Tandur, Telangana.",
    },
  ];

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current && typeof iframeRef.current.blur === "function") {
        iframeRef.current.blur();
      }
    } catch {
      // cross-origin; ignore
    }
  };

  return (
    <div className="w-full bg-white flex items-start py-8">
      <div className="mx-auto w-full px-4">
        {/* Heading */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-[50px] font-extrabold tracking-tight text-neutral-900">
            Our • Farm • Locations
          </h1>
        </header>

        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-2xl">
          <div className="flex flex-col md:flex-row h-[640px]">
            {/* LEFT: Cards column (cards vertically centered within column) */}
            <aside
              className="md:w-1/3 w-full border-b md:border-b-0 md:border-r border-gray-100 p-6
                         flex items-center justify-center"
            >
              <div className="w-full space-y-6 max-h-[88%] overflow-auto">
                {locations.map((loc) => (
                  <article
                    key={loc.id}
                    className="w-full flex gap-4 items-center p-4 rounded-lg border border-gray-100 bg-white shadow-sm"
                    aria-labelledby={`${loc.id}-title`}
                  >
                    {/* Image frame: fixed dimensions */}
                    <div className="flex-none w-[220px] h-[180px] rounded-md overflow-hidden border-2 border-gray-200 bg-gray-100">
                      <img
                        src={loc.image}
                        alt={loc.title}
                        className="w-full h-full object-cover"
                        width="220"
                        height="180"
                      />
                    </div>

                    {/* Text block vertically centered relative to image */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h2
                        id={`${loc.id}-title`}
                        className="text-sm font-semibold text-gray-900 leading-tight break-words"
                      >
                        {loc.title}
                      </h2>

                      <div className="mt-2 text-xs text-gray-600 whitespace-normal break-words max-h-[140px] overflow-auto">
                        {loc.details}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>

            {/* RIGHT: Map (non-interactive to preserve page scroll) */}
            <main className="md:w-2/3 w-full p-0 relative flex items-center justify-center">
              <iframe
            ref={iframeRef}
            title="Agasthya Farms Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.781696268116!2d78.3993122!3d16.9071725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca4d001f658ad3%3A0xdf4b9129dffae66b!2sAgasthya%20farms!5e1!3m2!1sen!2sin!4v1759579024151!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              outline: "none",
              pointerEvents: "none", // keeps scrolling smooth
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            onLoad={handleIframeLoad}
            aria-hidden="true"
          />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
