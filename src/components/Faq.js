'use client';

import { useState } from 'react';

// Updated data structure to include "tags" for the closed state
const faqData = [
  {
    question: 'What makes Agasthya milk different?',
    answer:
      'Agasthya Nutro milk is sourced from vetted farms, undergoes strict quality checks, rapid chilling, and uses fresh-seal packaging to ensure purity without preservatives or any adulteration.',
    tags: ['Farm-to-Table', '100% Pure', 'Quality Assured'],
  },
  {
    question: 'How does the subscription work?',
    answer:
      'Our subscription is designed for your convenience. Choose your products, set a delivery schedule, and manage everything through our app. You can pause, change, or cancel your plan anytime.',
    tags: ['Flexible Plans', 'Easy Management', 'Pause Anytime'],
  },
  {
    question: 'What are your delivery schedule and areas?',
    answer:
      'We deliver daily between 5:00 AM and 8:00 AM. To see if we deliver in your area, please enter your location or pin code on the subscription page of our app or website.',
    tags: ['Daily Deliveries', 'Early Morning', 'Expanding Network'],
  },
  {
    question: 'How do you ensure quality and hygiene?',
    answer:
      'We maintain a seamless cold chain from farm to doorstep. Our facilities follow strict FSSAI guidelines, with regular audits and contactless processing to ensure the highest standards of safety and hygiene.',
    tags: ['Cold-Chain Assured', 'FSSAI Compliant', 'Contactless Process'],
  },
];

// A single FAQ card component
function FaqItem({ item, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl p-6 text-left transition-all duration-300 ${
        isOpen
          ? 'bg-orange-50/80 shadow-lg'
          : 'bg-neutral-50 shadow-md hover:shadow-lg hover:bg-orange-50/50'
      }`}
      aria-expanded={isOpen}
    >
      <div className="flex items-start justify-between">
        <h3 className="pr-4 text-lg font-bold text-neutral-800">
          {item.question}
        </h3>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-orange-400">
          <svg
            className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
      </div>

      {/* Animated container for the answer */}
      <div
        className="grid overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="min-h-0">
          <p className="pt-4 text-base text-neutral-600">{item.answer}</p>
        </div>
      </div>
      
      {/* Tags are shown only when the item is closed */}
      {!isOpen && (
        <div className="pt-4">
          <ul className="space-y-1.5">
            {item.tags.map((tag, i) => (
              <li key={i} className="flex items-center text-sm text-neutral-500">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
}

// The main FAQ component to be exported
export default function Faq() {
  // Set the first item (index 0) to be open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-600 md:text-lg">
            Everything you need to know about our milk, delivery, and services.
          </p>
        </div>
        
        {/* Grid layout for the FAQ cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}