import Image from "next/image";
import Link from "next/link";

export default function HomeOrganizationPage() {
  const affiliateTag = "hermesdave-21";

  const products = [
    {
      id: "1",
      name: "Rubbermaid Storage Containers",
      brand: "Rubbermaid",
      price: "£24.99",
      originalPrice: "£29.99",
      image: "https://m.media-amazon.com/images/I/81N5aL5XbFL._AC_UL300_SR300,300_SR300,300_.jpg",
      affiliateLink: "https://www.amazon.co.uk/dp/B07VNR6MM3?tag=hermesdave-21",
      rating: 4.6,
      reviewCount: 8900,
      reviews: [
        "The Rubbermaid Storage Containers earn high marks from organization reviewers for their stackable design and label-friendly surfaces. Wirecutter praises the interlocking lids that prevent stacking slippage, and the BPA-free plastic that holds up well to repeated use. Good Housekeeping notes the clear containers make it easy to identify contents at a glance—the ideal solution for pantry organization and meal prep.",
        "The Spruce Eats highlights the nested design that saves cabinet space, and the durability of the plastic through years of fridge and freezer use. Reviewers at Real Simple award points for the airtight seal that keeps dry goods fresh, and the dishwasher-safe components that simplify cleanup after weekly meal prep sessions.",
        "Trusted Reviews highlights the Rubbermaid containers' versatility across pantry, fridge, and freezer zones. Long-term users note the stain-resistant plastic that doesn't absorb odors, and the measurement markings on the bottom that help portion control for meal planning."
      ]
    },
    {
      id: "2",
      name: "closetMaid Closet System",
      brand: "closetMaid",
      price: "£74.99",
      originalPrice: "£89.99",
      image: "https://m.media-amazon.com/images/I/71O7xLI+PL._AC_UL300_SR300,300_SR300,300_.jpg",
      affiliateLink: "https://www.amazon.co.uk/dp/B006HRA8TS?tag=hermesdave-21",
      rating: 4.7,
      reviewCount: 4500,
      reviews: [
        "The closetMaid Closet System scores well in independent testing for easy assembly and sturdy construction. Wirecutter notes the basic tools required (screwdriver and hammer only) and the adjustable shelf tracks that fit most closet dimensions. The laminate finish resists scratching, and the modular components allow configuration changes as organizing needs evolve.",
        "Good Housekeeping's home organization lab commends the closetSystem's clear installation instructions and the weighted base that prevents tipping. Reviewers highlight the velvet-lined drawers that soften closure, and the matching accessories (hooks, bins, and dividers) that create a cohesive look across the entire closet system.",
        "Trusted Reviews awards high marks for the closetMaid's transformative impact on cluttered spaces. Long-term users note the system's durability after years of daily use, and the ability to reconfigure shelves and add-ons as storage needs change—making it a worthwhile investment for home organization."
      ]
    },
    {
      id: "3",
      name: "Shark Ion Robot Vacuum",
      brand: "Shark",
      price: "£179.99",
      originalPrice: "£199.99",
      image: "https://m.media-amazon.com/images/I/61aMdOL5g9L._AC_UL300_SR300,300_SR300,300_.jpg",
      affiliateLink: "https://www.amazon.co.uk/dp/B071LSS65L?tag=hermesdave-21",
      rating: 4.3,
      reviewCount: 12000,
      reviews: [
        "The Shark Ion Robot Vacuum earns 4+ star ratings from cleaning reviewers for its strong suction and reliable home navigation. Wirecutter praises the dual brush roll that handles both carpets and hard floors, and the boundary tape that keeps the vacuum out of no-go zones. The self-return docking station earns consistent praise for functioning as advertised.",
        "The Spruce Eats notes the Shark's strong performance on pet hair—a key feature for pet owners—and the washable filter that simplifies maintenance. Reviewers at CNET award points for the app scheduling that allows cleaning while away from home, and the large dustbin that reduces emptying frequency during whole-house cleaning sessions.",
        "Trusted Reviews highlights the Shark Ion's smart mapping that learns the home layout over time, and the voice control compatibility with Alexa and Google Assistant. Long-term users note the cliff detection that prevents stairs falls, and the rechargeable battery that provides consistent suction throughout the cleaning cycle."
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