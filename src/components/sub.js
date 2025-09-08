import Head from 'next/head';

// Data for the subscription plans
const plansData = [
  {
    name: "The Daily Essential",
    description: "The foundation of a healthy home. Pure, creamy buffalo milk for your daily chai, coffee, and breakfast bowls.",
    price: 499,
    features: ["30 Liters of Fresh Milk", "Silent, Daily Morning Delivery", "Pause or Resume Anytime"],
    // --- FIX: Replaced "can't" with "can&apos;t"
    perfectFor: "Families who can&apos;t start their day without pure, fresh milk."
  },
  {
    name: "The Protein Pack",
    description: "Power your week with farm-fresh, free-range eggs laid by happy hens fed a nutrient-rich diet.",
    price: 249,
    features: ["30 Free-Range Country Eggs", "Convenient Bi-weekly Delivery", "From Nutrient-Rich Diet Fed Hens"],
    perfectFor: "Health enthusiasts and anyone needing quick, nutritious meals."
  },
  {
    // --- FIX: Replaced "Lover's" with "Lover&apos;s"
    name: "The Dairy Lover&apos;s Combo",
    description: "Go beyond milk. Indulge in a complete dairy experience with soft, fresh paneer for your curries and golden, aromatic ghee.",
    price: 799,
    features: ["30 Liters of Fresh Milk", "500g Fresh Paneer Delivered Weekly", "500ml Pure Ghee Delivered Monthly", "Exclusive Member-Only Discounts"],
    perfectFor: "Foodies and families who love cooking with premium dairy ingredients.",
    popular: true
  },
  {
    name: "The Full Harvest Box",
    description: "The complete farm-to-table experience in one box. Get all of our dairy goodness plus a curated selection of fresh, seasonal vegetables.",
    price: 1299,
    features: ["Everything in the Dairy Lover's Combo", "30 Country Eggs", "Weekly Basket of Seasonal Vegetables"],
    perfectFor: "Busy households wanting the convenience of a complete, healthy grocery solution."
  }
];

// Icon Components
const CheckIcon = () => (
    <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const FreshnessIcon = () => (
    <svg className="w-12 h-12 text-yellow-500 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
    </svg>
);

const FlexibilityIcon = () => (
    <svg className="w-12 h-12 text-yellow-500 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
    </svg>
);

const EthicalLocalIcon = () => (
    <svg className="w-12 h-12 text-yellow-500 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);


export default function SubscriptionPage() {
  return (
    <>
      <Head>
        <title>Subscription Plans - Freshness Delivered</title>
        <meta name="description" content="Choose your perfect plan for farm-fresh dairy and produce delivery." />
      </Head>

      <div className="bg-white">
        {/* Section 1: Hero */}
        <header className="relative">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div
                className="relative min-h-[60vh] flex flex-col justify-center items-center text-center text-white p-4"
                style={{ backgroundImage: "url(/subh.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="z-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Wake Up to the Farm.</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Experience the unparalleled taste of dairy and produce, ethically sourced from local farms and delivered with care right to your door.
                    </p>
                    <a href="#plans" className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-colors">
                        Find Your Perfect Plan
                    </a>
                </div>
            </div>
        </header>

        <main>
          {/* Section 2: Why You'll Love Us */}
          <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* --- FIX: Replaced "You'll" with "You&apos;ll" --- */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Why You&apos;ll Love Us</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="feature-item bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FreshnessIcon />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Peak Freshness & Purity</h3>
                  <p className="text-gray-600">Sourced daily from local farms, ensuring you get the highest quality and taste, free from additives.</p>
                </div>
                <div className="feature-item bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <FlexibilityIcon />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Complete Flexibility</h3>
                  <p className="text-gray-600">Going on vacation? Pause, modify, or resume your subscription anytime. You are in complete control.</p>
                </div>
                <div className="feature-item bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <EthicalLocalIcon />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Ethical & Local</h3>
                  <p className="text-gray-600">We partner with local farmers who believe in ethical practices and sustainable farming.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Choose Your Plan */}
          <section id="plans" className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Plan</h2>
              <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-600 mt-4 mb-12 text-lg">
                Flexible subscriptions for every family&apos;s needs. Pause or change anytime.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plansData.map((plan) => (
                  <div
                    key={plan.name}
                    className={`bg-white rounded-xl shadow-md p-6 text-left flex flex-col transition-all duration-300 ${plan.popular ? 'border-2 border-yellow-500 relative transform lg:scale-105' : 'border border-gray-200'}`}
                  >
                    {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold py-1 px-4 rounded-full">MOST POPULAR</div>}

                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    
                    <p className="text-gray-500 mt-2 mb-6">{plan.description}</p>

                    <div>
                      <span className="text-5xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-lg text-gray-500">/ month</span>
                    </div>

                    <ul className="my-6 space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm bg-gray-50 p-3 rounded-md mt-auto mb-6">{plan.perfectFor}</p>

                    <a href="#" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors ${plan.popular ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>
                      Subscribe Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}