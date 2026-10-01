import Image from "next/image";
import Link from "next/link";

export default function HomeOrganizationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Organization
          </h1>
          <p className="text-lg text-gray-600">
            Smart solutions for a more organized home
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Rubbermaid Storage Containers
            </h3>
            <p className="text-gray-500 text-sm">
              Plastic storage bins and containers
            </p>
            <a
              href="https://www.amazon.com/dp/B07VNR6MM3?tag=hermesdave-21"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors"
            >
              View on Amazon
            </a>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              closetMaid Closet System
            </h3>
            <p className="text-gray-500 text-sm">
              Closet organization and storage solutions
            </p>
            <a
              href="https://www.amazon.com/dp/B006HRA8TS?tag=hermesdave-21"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors"
            >
              View on Amazon
            </a>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Shark Ion Robot Vacuum
            </h3>
            <p className="text-gray-500 text-sm">
              Robot vacuum for automated cleaning
            </p>
            <a
              href="https://www.amazon.com/dp/B071LSS65L?tag=hermesdave-21"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors"
            >
              View on Amazon
            </a>
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