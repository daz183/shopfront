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
        "These containers stack perfectly and the labels stick well. Great for pantry organization and leftover storage. Dishwasher safe and the plastic is durable - no cracking after months of use.",
        "Best storage container brand I've used. The various sizes nest inside each other saving cupboard space. The lids fit securely and the clear plastic makes it easy to see contents.",
        "Perfect for meal prep! I use these for weekly portioning. The square shape maximizes fridge space compared to round containers. Worth the investment for the quality."
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
        "Easy to assemble - my husband put it together in about 2 hours with basic tools. The instructions are clear and the parts labeled. Sturdy construction holds a lot of weight without sagging over time.",
        "Transformed my cluttered closet into an organized space. The adjustable shelves accommodate different sized items from folded jeans to tall boots. The finish looks great and matches my room decor.",
        "Worth the investment if you have lots of clothes and accessories. The drawers glide smoothly and the hanging rod is solid. My only wish is that the instructions included more photos for the bracketing steps."
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
        "Pet hair has met its match! Our shedding dog's hair is no problem for this vacuum. Returns to its dock automatically and the app scheduling is convenient. Occasionally gets stuck on area rugs.",
        "Finally a robot vacuum that actually picks up pet hair! The filter is washable and reasonably priced. The mapping technology learns your home layout over time. Battery life could be better for larger homes.",
        "Good for daily maintenance cleaning. Picks up crumbs, dust, and pet hair on hardwood and low-pile carpet. The virtual wall feature keeps it out of rooms you don't want it in. Noise level is moderate."
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
            <div
              key={product.id}
              className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                {product.brand}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-green-600">
                    {product.price}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                      className="text-yellow-400"
                    />
                  ))}
                  <span className="text-gray-500 text-sm">
                    {product.rating} ({product.reviewCount}+)
                  </span>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600 line-clamp-3">
                {product.reviews.map((review, idx) => (
                  <p key={idx} className="mb-1">
                    "{review}"
                  </p>
                ))}
              </div>
              <Link
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition-colors"
              >
                View on Amazon
              </Link>
            </div>
          ))}
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