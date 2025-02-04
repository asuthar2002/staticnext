import Card from "./Card";
import products from "@/data/products";
import products2 from "@/data/products2";
import products3 from "@/data/products3";
import products4 from "@/data/products4";
import products5 from "@/data/products5";

export default function Home() {
  return (
    <div className="mb-10  bg-gray-300">
      <div className="container ml-2 mr-0 py-4 ">
        {/* <h1 className="text-2xl font-bold mb-6">Joshi Ballon Decor</h1> */}

        {/* First Row */}
        <div className="mb-10">
          <h1 className="text-xl font-bold mb-6 ml-4 bg-gray-200 inline-block py-2 px-4 rounded-sm border ">
            For Birthday Party
          </h1>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4">
              {products.map((product, index) => (
                <div key={index} className="w-80 flex-shrink-0 sm:mx-2">
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* products2 */}
        <div className="mb-10">
          <h2 className="text-xl  font-bold mb-6 bg-gray-200 ml-4 inline-block py-2 px-4 rounded-sm border">
            Kids Birthday Decoration
          </h2>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4">
              {products2.map((product, index) => (
                <div key={index} className="w-80 flex-shrink-0 sm:mx-2">
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anniversary Decoration */}
        <div className="mb-10">
          <h2 className="text-xl  font-bold mb-6 bg-gray-200 ml-4 inline-block py-2 px-4 rounded-sm border">
            Anniversary Decoration
          </h2>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4">
              {products3.map((product, index) => (
                <div key={index} className="w-80 flex-shrink-0 sm:mx-2">
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Welcome baby */}
        <div className="mb-10">
          <h2 className="text-xl  font-bold mb-6 bg-gray-200 ml-4 inline-block py-2 px-4 rounded-sm border">
            Baby Well-Come
          </h2>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4">
              {products4.map((product, index) => (
                <div key={index} className="w-80 flex-shrink-0 sm:mx-2">
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decoration themes for various ceremonies */}
        <div className="mb-10">
          <h1 className="text-xl  font-bold mb-6 bg-gray-200 ml-4 inline-block py-2 px-4 rounded-sm border">
            Decoration Themes for Ceremonies
          </h1>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4">
              {products5.map((product, index) => (
                <div key={index} className="w-80 flex-shrink-0 sm:mx-2">
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
