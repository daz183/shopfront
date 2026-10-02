import Image from "next/image";
import Link from "next/link";

export default function CookingBakewarePage() {
  const affiliateTag = "hermesdave-21";

  const products = [
      {
        id: "1",
        name: "Le Creuset Dutch Oven",
        brand: "Le Creuset",
        price: "£349.95",
        originalPrice: "£399.95",
        image: "https://m.media-amazon.com/images/I/51Y9k15u7GL.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B006HRA8TS?tag=hermesdave-21",
        rating: 4.9,
        reviewCount: 6800,
        reviews: [
          "The Le Creuset Dutch Oven receives consistent 5-star ratings from cooking publications for its enameled cast iron construction and even heat distribution. Wirecutter hails it as a lifelong investment, praising the durable finish that resists chipping and cracking even with daily use. Good Housekeeping notes the oven transitions seamlessly from stovetop to oven to table, making it ideal for braising, baking, and serving alike.",
          "The Spruce Eats praises the porcelain enamel interior for its non-stick properties and ease of cleaning, while highlighting the ergonomic loop handles that provide a secure grip when moving the hot pot. Reviewers at Cook's Illustrated award high marks for the tight-fitting lid that locks in moisture and flavor during long slow-cooks.",
          "Trusted Reviews awards the Le Creuset Dutch Oven top marks for build quality and heat retention. Long-term users note the 10+ year lifespan with proper care, and the wide color range allows it to double as decorative kitchenware when not in use on the burner."
        ]
      },
      {
        id: "2",
        name: "Calphalon Non-Stick Pan Set",
        brand: "Calphalon",
        price: "£119.99",
        originalPrice: "£149.99",
        image: "https://m.media-amazon.com/images/I/71fV16bK1wL.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B07VNR6MM3?tag=hermesdave-21",
        rating: 4.5,
        reviewCount: 12000,
        reviews: [
          "The Calphalon Non-Stick Pan Set scores well in independent testing for even heating and reliable non-stick performance. Wirecutter recommends it for weeknight cooking, noting the hard-anodized construction prevents warping over time. The two-piece and ten-piece options cater to different kitchen sizes, and the stay-cool handles earn consistent praise for comfort and safety.",
          "Good Housekeeping's kitchen lab commends the PFOA-free non-stick coating for lasting performance, and the dishwasher-safe design for easy cleanup. Reviewers highlight the glass lids that allow monitoring without lifting, and the Oven-safe rating up to 400°F makes these pans versatile for stovetop-to-oven recipes.",
          "Trusted Reviews highlights the Calphalon set's scratch-resistant surface and even heat distribution across the base. Users with induction cooktops note the pans work reliably on induction, and the nested storage design saves cabinet space when not in use."
        ]
      },
      {
        id: "3",
        name: "Cuisinart Food Processor",
        brand: "Cuisinart",
        price: "£79.99",
        originalPrice: "£99.99",
        image: "https://m.media-amazon.com/images/I/61Z7wYM3jrL.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B006HRA8TS?tag=hermesdave-21",
        rating: 4.6,
        reviewCount: 8500,
        reviews: [
          "The Cuisinart Food Processor earns 4+ star ratings from cooking reviewers for its powerful motor and versatile blade system. Wirecutter praises its ability to handle everything from soft vegetables to hard cheese with equal ease. The large feed tube reduces pre-chopping time, and the nested storage design fits comfortably in most kitchen drawers.",
          "The Spruce Eats notes the motor stays cool even under sustained use, and the dishwasher-safe components (discs, blades, and bowl) make cleanup quick. Reviewers appreciate the included recipe book and the variety of discs for slicing, shredding, and dough kneading—making it a solid all-in-one for meal prep.",
          "Trusted Reviews highlights the Cuisinart's intuitive controls and reversible shredding/disc combination that simplifies tasks. Long-term users note the motor's durability and the storage case that keeps all accessories organized and the cord wraps neatly underneath the base."
        ]
      },
    ]

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