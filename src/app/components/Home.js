import Card from "./Card";
import products from "@/data/products";
import products2 from "@/data/products2";
import products3 from "@/data/products3";
import products4 from "@/data/products4";
import products5 from "@/data/products5";

export default function Home() {
  return (
    <div className="mb-10">
      <div className="container mx-auto py-4">
        {/* First Row */}
        <div className="mb-10">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6 ml-4 bg-gradient-to-r from-[#FF5733] to-[#C70039] inline-block py-2 px-4 rounded-sm border text-white">
              For Birthday Party
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Kids Birthday Decoration */}
        <div className="mb-10">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6 ml-4 bg-gradient-to-r from-[#FF5733] to-[#C70039] inline-block py-2 px-4 rounded-sm border text-white">
              Kids Birthday Decoration
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {products2.map((product, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Anniversary Decoration */}
        <div className="mb-10">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6 ml-4 bg-gradient-to-r from-[#FF5733] to-[#C70039] inline-block py-2 px-4 rounded-sm border text-white">
              Anniversary Decoration
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {products3.map((product, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Baby Welcome */}
        <div className="mb-10">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6 ml-4 bg-gradient-to-r from-[#FF5733] to-[#C70039] inline-block py-2 px-4 rounded-sm border text-white">
              Baby Welcome
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {products4.map((product, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Decoration for Ceremonies */}
        <div className="mb-10">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-6 ml-4 bg-gradient-to-r from-[#FF5733] to-[#C70039] inline-block py-2 px-4 rounded-sm border text-white">
              Decoration for Ceremonies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {products5.map((product, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Card {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
