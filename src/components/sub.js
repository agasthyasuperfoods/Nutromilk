import Head from 'next/head';

// Data for the subscription plans (No changes)
const plansData = [
  {
    name: "The Trial Pack",
    description: "New to us? This is the perfect way to experience the freshness. Ideal for individuals or couples.",
    price: 899,
    features: ["15 Liters of Pure Milk", "Daily Morning Delivery", "Pause or Cancel Anytime"],
    perfectFor: "A perfect start to see why our milk is the talk of the town."
  },
  {
    name: "The Daily Ritual",
    description: "Our standard plan for small families. Ensure you never run out of fresh milk for your daily needs.",
    price: 1699,
    features: ["30 Liters of Pure Milk", "Daily Morning Delivery", "Pause or Cancel Anytime", "Priority Customer Support"],
    perfectFor: "Couples and small families who make fresh milk a part of their daily routine.",
    popular: true
  },
  {
    name: "The Family Fix",
    description: "The ideal quantity for growing families. Plenty of milk for chai, coffee, cereal, and cooking.",
    price: 2499,
    features: ["45 Liters of Pure Milk", "Daily Morning Delivery", "Pause or Cancel Anytime", "Priority Customer Support"],
    perfectFor: "The perfect solution for households that run on love, laughter, and lots of milk."
  },
  {
    name: "The Bulk Saver",
    description: "Our best value plan. For large families or anyone who simply can't get enough of pure, creamy milk.",
    price: 3199,
    features: ["60 Liters of Pure Milk", "Best Value (Save 10%!)", "Daily Morning Delivery", "Pause or Cancel Anytime"],
    perfectFor: "Large households and true milk lovers who want the most value."
  }
];

// Accent color from your text image
const iconColor = "text-amber-500"; 

const CheckIcon = () => (
    <svg className={`w-6 h-6 ${iconColor} mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const FreshnessIcon = () => (
    <svg className={`w-12 h-12 ${iconColor} mb-4 mx-auto transition-transform duration-500 group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121a3 3 0 10-4.242 0M5.636 5.636a9 9 0 1012.728 0M12 3v1m0 16v1m-6.364-2.272l.707-.707m11.314 0l.707.707M3 12h1m16 0h1m-2.272-6.364l-.707.707m0 11.314l-.707-.707"></path>
    </svg>
);

const FlexibilityIcon = () => (
    <svg className={`w-12 h-12 ${iconColor} mb-4 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
    </svg>
);

const EthicalLocalIcon = () => (
    <svg className={`w-12 h-12 ${iconColor} mb-4 mx-auto transition-transform duration-500 group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

const ClockIcon = () => (
    <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const CalendarIcon = () => (
    <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const BoxIcon = () => (
    <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);
const SparklesIcon = () => (
    <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4 4-4 5.293-5.293a1 1 0 011.414 0L21 12m-4.586-4.586l1.414 1.414" /></svg>
);
const LocationPinIcon = () => (
    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
);


export default function SubscriptionPage() {
  return (
    <>
      <Head>
        <title>Subscription Plans - Agasthya Nutro Milk</title>
        <meta name="description" content="Choose your perfect monthly milk plan from Agasthya. Pure, fresh, and delivered to your doorstep." />
      </Head>

      <div className="bg-white">
        {/* Section 1: Hero */}
        <header className="relative">
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div
                className="relative min-h-[60vh] flex flex-col justify-center items-center text-center text-white p-4"
                style={{ backgroundImage: "url(/subh.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="z-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Pure Milk, Delivered Daily.</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Experience the simple joy of farm-fresh milk delivered silently to your doorstep before the sun comes up. Your perfect morning starts here.
                    </p>
                    <a href="#plans" className="bg-amber-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                        Choose Your Plan
                    </a>
                </div>
            </div>
        </header>

        <main>
          {/* Section 2: How It Works */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">How Delivery Works</h2>
              <p className="text-gray-500 mt-4 mb-10 text-lg">
                Getting fresh milk is simple, reliable, and convenient.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                  <div className={`${iconColor} mb-4`}><ClockIcon /></div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Early Morning Delivery</h3>
                  <p className="text-gray-600">We deliver 7 days a week between 5:00 AM and 7:30 AM, right to your doorstep.</p>
                </div>
                <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                  <div className={`${iconColor} mb-4`}><CalendarIcon /></div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Easy Order Management</h3>
                  <p className="text-gray-600">Pause or modify your next day's order anytime before 9:00 PM the previous night via our app.</p>
                </div>
                <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                  <div className={`${iconColor} mb-4`}><BoxIcon /></div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Safe & Contactless</h3>
                  <p className="text-gray-600">Your order is placed safely at your doorstep. You'll get a notification the moment it arrives.</p>
                </div>
                <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                  <div className={`${iconColor} mb-4`}><SparklesIcon /></div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Guaranteed Freshness</h3>
                  <p className="text-gray-600">We ensure our milk is fresh and pure. If you have any issues, contact us before 11:00 AM for support.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Choose Your Plan */}
          <section id="plans" className="py-8 sm:py-12 bg-white"> 
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">Find Your Perfect Milk Plan</h2>
              <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-3 mb-6 text-lg">
                Simple, transparent pricing for every household.
              </p>
              
              {/* --- UPDATED: Redesigned the Delivery Area banner --- */}
              <div className="max-w-4xl mx-auto mb-8 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <LocationPinIcon />
                  </div>
                  <div className="text-left text-sm">
                    <p className="font-semibold text-amber-900">
                      Now Delivering In:
                    </p>
                    <p className="text-amber-800">
                      Jubilee Hills, Manikonda, Narsing, Chitrapuri, & OU Colony.
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
                      The app will confirm availability for your specific address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                {plansData.map((plan) => (
                  <div
                    key={plan.name}
                    className={`bg-white rounded-xl shadow-md p-6 text-left flex flex-col transition-all duration-300 h-full ${plan.popular ? 'border-2 border-amber-500 relative transform lg:scale-105' : 'border border-gray-200 hover:shadow-xl'}`}
                  >
                    {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold py-1 px-4 rounded-full tracking-wider">MOST POPULAR</div>}
                    <h3 className="text-2xl font-bold text-slate-800">{plan.name}</h3>
                    <p className="text-gray-500 mt-2 mb-6 h-20">{plan.description}</p>
                    <div>
                      <span className="text-4xl font-bold text-slate-800">₹{plan.price}</span>
                      <span className="text-lg text-gray-500">/ month</span>
                    </div>
                    <ul className="my-4 space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4">
                      <p className="text-sm bg-slate-50 p-3 rounded-md mb-4">{plan.perfectFor}</p>
                      <a href="#" className={`w-full block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-slate-800 text-white hover:bg-slate-900'}`}>
                        Subscribe Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Why Our Milk is Better */}
          <section className="py-8 sm:py-12 bg-white"> 
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">Why Our Milk is Better</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group feature-item bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <FreshnessIcon />
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Unmatched Freshness</h3>
                  <p className="text-gray-500">Sourced from local farms and delivered within hours of milking. It doesn't get fresher than this.</p>
                </div>
                <div className="group feature-item bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <FlexibilityIcon />
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Total Control</h3>
                  <p className="text-gray-500">Going on vacation? Pause or modify your subscription anytime through our simple dashboard. You're in charge.</p>
                </div>
                <div className="group feature-item bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <EthicalLocalIcon />
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">Ethical & Pure</h3>
                  <p className="text-gray-500">Our partner farms treat their cattle with care. The result is pure milk, free from any additives or hormones.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}