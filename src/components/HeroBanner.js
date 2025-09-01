import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Fresh Dairy, From <RotatingText /> to Your Home
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Pure milk, ghee, butter, and curd – straight from the farm to your
            table. 100% Natural & Healthy.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-600">
              Shop Now
            </button>
            <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-2xl hover:bg-yellow-100">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function RotatingText() {
  const words = ["Morning", "Noon", "Evening", "Night"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-yellow-500">{words[index]}</span>;
}
