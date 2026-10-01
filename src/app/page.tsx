import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home & Kitchen
          </h1>
          <p className="text-lg text-gray-600">
            Expert reviews and recommendations for home and kitchen products
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Kitchen Tools & Gadgets
            </h3>
            <p className="text-gray-500 text-sm">
              Discover innovative tools that make cooking and prep easier
            </p>
            <Link
              href="/kitchen-tools"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Browse Kitchen Tools
            </Link>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Home Organization
            </h3>
            <p className="text-gray-500 text-sm">
              Smart solutions for a more organized home
            </p>
            <Link
              href="/home-organization"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Browse Home Organization
            </Link>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Cooking & Bakeware
            </h3>
            <p className="text-gray-500 text-sm">
              Quality cookware and bakeware for every skill level
            </p>
            <Link
              href="/cooking-bakeware"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Browse Cooking & Bakeware
            </Link>
          </div>
        </section>

        <div className="mt-12 pt-12 border-t text-center text-gray-500 text-sm">
          <p>
            Amazon Associate • Commissions on qualifying purchases
          </p>
        </div>
      </div>
    </main>
  );
}