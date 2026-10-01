import Image from "next/image";
import Link from "next/link";

export default function KitchenToolsPage() {
  const affiliateTag = "hermesdave-21";

  const products = [
    {
      id: "1",
      name: "Instant Pot Duo",
      brand: "Instant Pot",
      price: "$99.99",
      originalPrice: "$119.99",
      image: "https://m.media-amazon.com/images/I/71-CL5m+0OL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B07K77VYS6?tag=hermesdave-21`,
      rating: 4.5,
      reviewCount: 52000,
      reviews: [
        "This Instant Pot has completely changed my meal prep routine. I cook rice, beans, and even yogurt in it. The sauté function browns meat perfectly before pressure cooking.",
        "Love this! The 8-in-1 functionality replaced my slow cooker, steamer, and rice cooker. Easy to clean, comes with useful recipes book.",
        "Best kitchen appliance I've ever bought. Made perfect hard-boiled eggs, and the slow cook function is amazing for pot roasts."
      ]
    },
    {
      id: "2",
      name: "KitchenAid Stand Mixer",
      brand: "KitchenAid",
      price: "$279.99",
      originalPrice: "$359.99",
      image: "https://m.media-amazon.com/images/I/51MJxeqG8pL._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B006HRA8TS?tag=hermesdave-21`,
      rating: 4.8,
      reviewCount: 38000,
      reviews: [
        "Absolutely beautiful mixer. The build quality is exceptional - all metal construction. The 10-speed settings allow for everything from meringue to bread dough.",
        "Gift for my wife and she hasn't stopped using it. Comes with so many attachments - pasta maker, food grinder, ice cream maker. Worth every penny.",
        "If you bake seriously, get this mixer. The planetary mixing action ensures everything is incorporated perfectly. Will last for decades."
      ]
    },
    {
      id: "3",
      name: "Ninja Air Fryer",
      brand: "Ninja",
      price: "$119.99",
      originalPrice: "$149.99",
      image: "https://m.media-amazon.com/images/I/71V+vGJk+5L._AC_UL300_SR300,300_.jpg",
      affiliateLink: `https://www.amazon.com/dp/B07VNR6MM3?tag=hermesdave-21`,
      rating: 4.4,
      reviewCount: 15000,
      reviews: [
        "Crispy food with little to no oil! Perfect for frozen french fries, chicken wings, and reheating leftovers. Much faster than preheating the oven.",
        "The crisper plate is a game-changer. Cooks wings perfectly in 20 minutes. Noise level is higher than I expected but the results are worth it.",
        "Great for small batches. I live in a small apartment and this doesn't take up much counter space. Easy cleanup - just wipe down the crisper plate."
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kitchen Tools & Gadgets
          </h1>
          <p className="text-lg text-gray-600">
            High-quality tools for efficient cooking and prep
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
                  {product.originalPrice && (
                    <p className="text-gray-400 text-sm line-through">
                      {product.originalPrice}
                    </p>
                  )}
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
              <div className="mt-3 text-sm text-gray-600">
                {product.reviews.map((review, idx) => (
                  <p key={idx} className="mb-1 line-clamp-2">
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