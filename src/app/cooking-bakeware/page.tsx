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
        "The best cookware investment I've ever made. This Dutch oven has lasted 10+ years with no chips or cracks. The enameled surface is beautiful and cleans up easily. Food releases effortlessly and it transitions seamlessly from stovetop to oven to table.",
        "Baking artisan bread has never been the same. The heat retention is exceptional - perfectly crisp crust every time. The lid makes an excellent steamer for vegetables. Worth every penny for serious home cooks.",
        "Le Creuset forever. I inherited my mother's 5-quart and bought the 7-quart for myself. The color stays vibrant and the cooking performance is unmatched. Pass this down to your children."
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
        "Perfect for weeknight cooking. The non-stick surface actually works - eggs slide right off. Dishwasher safe and the coating holds up well after months of use. The set includes great sizes for everything from sauces to family meals.",
        "Upgraded from Tefal and the difference is night and day. The hard-anodized construction distributes heat evenly - no more hot spots burning food. Oven safe to 450°F for finishing roasts or baking cornbread.",
        "Great value for a 10-piece set. Use the larger skillet for everything from pancakes to stir-fry. The helper handle makes lifting heavy pans safer. Non-stick still going strong after a year of weekly use."
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
        "Makes meal prep a breeze. Chopping onions, making hummus, and shredding cheese all happen in seconds. The various discs and blades mean you can slice, shred, and knead dough. The motor is powerful but not too loud.",
        "Best under $100 I've bought for the kitchen. Perfect for making pesto, chopping veggies for freezing, and mixing dough. The storage case keeps all the discs and blades organized. Dishwasher safe parts make cleanup easy.",
        "Upgraded from a 3-cup to this 14-cup model and so glad I did. Makes large batches of soup sauce, or hummus for parties. The wide feed tube means less pre-cutting. Some assembly required but clear instructions."
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
              {/* Reviews section */}
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
      </main>
    </main>
  );
}