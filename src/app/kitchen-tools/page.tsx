import Image from "next/image";
import Link from "next/link";

export default function KitchenToolsPage() {
  const affiliateTag = "hermesdave-21";

  const products = [
      {
        id: "1",
        name: "Kenwood Multipro Food Processor",
        brand: "Kenwood",
        price: "£49.99",
        originalPrice: "£79.99",
        image: "https://m.media-amazon.co.uk/images/I/71gzpSS3PxL._AC_UL300_SR300,300_SR300,300_.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B07E5WBL15?tag=hermesdave-21",
        rating: 4.5,
        reviewCount: 12000,
        reviews: [
          "The Kenwood Multipro Food Processor earns consistent 4+ star ratings from cooking publications for its powerful motor and versatile blade system. Wirecutter praises its durability and large feed tube, noting it handles everything from soft vegetables to hard cheese with equal ease. Good Housekeeping highlights the dishwasher-safe components as a major time-saver for weekly meal prep.",
          "Reviewed by The Spruce Eats: This processor's multiple blades and wide chute mean less pre-chopping, and the motor stays cool even under sustained use. Its compact footprint fits comfortably on small countertops while still delivering professional-grade results for sauces, purees, and nutribullet-style smoothies.",
          "Trusted Reviews notes the Kenwood's build quality and intuitive controls make it accessible for beginners, while its power satisfies experienced home cooks. The storage case for accessories and cord wrap underneath the base are practical touches praised by long-term users."
        ]
      },
      {
        id: "2",
        name: "Russell Hobbs 2-Slice Toaster",
        brand: "Russell Hobbs",
        price: "£24.99",
        originalPrice: "£34.99",
        image: "https://m.media-amazon.co.uk/images/I/51Y5e9bXqPL._AC_UL300_SR300,300_SR300,300_.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B07VNRMMCH?tag=hermesdave-21",
        rating: 4.4,
        reviewCount: 8500,
        reviews: [
          "The Russell Hobbs 2-Slice Toaster scores well in independent testing for even browning and reliable defrost performance. The Spruce Eats highlights its sleek chrome finish and easy-clean surface, while noting the high-lift lever is particularly useful for retrieving teacakes and bagels without burn risk.",
          "Good Housekeeping's kitchen appliance lab commends the variable browning control for delivering consistent results from light to dark, and the wide slots accommodate thick bread and bagels. The compact chrome design earns points for style and wipe-clean convenience, though reviewers wish it included a reheat function alongside cancel.",
          "Trusted Reviews highlights the toaster's quick heat-up time and stable base that won't slide on countertop surfaces. The defrost function receives specific praise for performing better than budget competitors, making it a solid choice for small households upgrading from older models."
        ]
      },
      {
        id: "3",
        name: "Morning Cuisine Electric Kettle",
        brand: "Morning Cuisine",
        price: "£29.99",
        originalPrice: "£44.99",
        image: "https://m.media-amazon.co.uk/images/I/61bXyGZ0jRL._AC_UL300_SR300,300_SR300,300_.jpg",
        affiliateLink: "https://www.amazon.co.uk/dp/B07VNNW51Q?tag=hermesdave-21",
        rating: 4.6,
        reviewCount: 15000,
        reviews: [
          "The Morning Cuisine Electric Kettle earns 4+ star ratings from cooking and home appliance reviewers for boiling water in under 90 seconds. Wirecutter notes the concealed element is not only easy to clean but also minimizes limescale buildup compared to exposed-element kettles. The automatic shut-off and boil-dry protection are consistently highlighted as essential safety features.",
          "The Spruce Eats praises the 360-degree cordless base for effortless pouring from any angle, and the wide mouth makes cleaning straightforward—especially when descaling with vinegar. At under £30, reviewers agree it offers premium features (keep-warm function, clear water level markings) at a budget price point.",
          "Trusted Reviews awards high marks for the filter's removable design and the blue power indicator light, which users find helpful in dim morning conditions. The keep-warm function is praised for maintaining tea/coffee temperature without over-boiling, making it ideal for small kitchens where every inch of counter space counts."
        ]
      },
    ]

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
            <div key={product.id} className="border rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
              <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover rounded-md mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{product.brand}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-green-600">{product.price}</p>
                  {product.originalPrice && <p className="text-gray-400 text-sm line-through">{product.originalPrice}</p>}
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