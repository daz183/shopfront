import Image from "next/image";
import Link from "next/link";

export default function CookingBakewarePage() {
  const affiliateTag = "hermesdave-21";

  const products = [
    {
      id: "1",
      name: "Le Creuset Dutch Oven",
      brand: "Le Creuset",
      price: "$399.95",
      image: "https://m.media-amazon.com/images/I/51Y9k15u7GL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B006HRA8TS?tag=hermesdave-21`,
      rating: 4.9,
      reviewCount: 6800,
      reviews: [
        "Best cookware investment I've ever made.",
        "Lasts 10+ years with no chips or cracks.",
        "Transitions seamlessly from stovetop to oven to table."
      ]
    },
    {
      id: "2",
      name: "Calphalon Non-Stick Pan Set",
      brand: "Calphalon",
      price: "$149.95",
      image: "https://m.media-amazon.com/images/I/71fV16bK1wL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B07VNR6MM3?tag=hermesdave-21`,
      rating: 4.5,
      reviewCount: 12000,
      reviews: [
        "Perfect for weeknight cooking.",
        "Non-stick surface actually works.",
        "Great value for a 10-piece set."
      ]
    },
    {
      id: "3",
      name: "Cuisinart Food Processor",
      brand: "Cuisinart",
      price: "$99.95",
      image: "https://m.media-amazon.com/images/I/61Z7wYM3jrL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B006HRA8TS?tag=hermesdave-21`,
      rating: 4.6,
      reviewCount: 8500,
      reviews: [
        "Makes meal prep a breeze.",
        "Best under $100 I've bought for the kitchen.",
        "Makes large batches of soup sauce."
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cooking & Bakeware
          </h1>
          <p className="text-lg text-gray-600">
            Quality cookware and bakeware for every skill level
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover rounded-md mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{product.brand}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-green-600">{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                  <span className="text-gray-500 text-sm">{product.rating} ({product.reviewCount}+)</span>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                {product.reviews.map((review, idx) => (
                  <p key={idx} className="mb-1">{review}</p>
                ))}
              </div>
              <Link href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors">
                View on Amazon
              </Link>
            </div>
          ))}
        </section>

        <div className="mt-12 pt-12 border-t text-center text-gray-500 text-sm">
          <p>Amazon Associate • Commissions on qualifying purchases</p>
        </div>
      </div>
    </main>
  );
}