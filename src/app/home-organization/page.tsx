import Image from "next/image";
import Link from "next/link";

export default function HomeOrganizationPage() {
  const affiliateTag = "hermesdave-21";

  const products = [
    {
      id: "1",
      name: "Rubbermaid Storage Containers",
      brand: "Rubbermaid",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/81N5aL5XbFL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B07VNR6MM3?tag=hermesdave-21`,
      rating: 4.6,
      reviewCount: 8900,
      reviews: [
        "These containers stack perfectly and the labels stick well.",
        "Best storage container brand I've used.",
        "Perfect for meal prep!"
      ]
    },
    {
      id: "2",
      name: "closetMaid Closet System",
      brand: "closetMaid",
      price: "$89.99",
      image: "https://m.media-amazon.com/images/I/71O7xLI+PL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B006HRA8TS?tag=hermesdave-21`,
      rating: 4.7,
      reviewCount: 4500,
      reviews: [
        "Easy to assemble with basic tools.",
        "Transformed my cluttered closet.",
        "Worth the investment for lots of clothes."
      ]
    },
    {
      id: "3",
      name: "Shark Ion Robot Vacuum",
      brand: "Shark",
      price: "$199.99",
      image: "https://m.media-amazon.com/images/I/61aMdOL5g9L._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B071LSS65L?tag=hermesdave-21`,
      rating: 4.3,
      reviewCount: 12000,
      reviews: [
        "Pet hair has met its match.",
        "Returns to its dock automatically.",
        "Good for daily maintenance cleaning."
      ]
    },
  ];

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