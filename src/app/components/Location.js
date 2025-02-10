export default function Location() {
  const locations = [
    "Dasarahalli",
    "Adugodi",
    "Ananth Nagar",
    "Anjanpura",
    "Arekere",
    "Attibele",
    "Austin Town",
    "Bagalur",
    "Banashankari",
    "Banaswadi",
    "Bannerghatta Road",
    "Basavanagudi",
    "Ejipura",
    "Electronic City",
    "HBR Layout",
    "Hebbagodi",
    "Hebbal",
    "Hoodi",
    "Hormavu",
    "HSR Layout",
    "Indiranagar",
    "Jakkur",
    "Jalahalli",
    "Jayanagar",
    "JP Nagar",
    "Kadugodi",
    "Kalasipalyam",
    "MG Road",
    "Marathahalli",
    "Munnekolala",
    "Nandini Layout",
    "RT Nagar",
    "RR Nagar",
    "Sarjapur Road",
    "Whitefield",
    "Yelahanka",
    "JC Nagar",
  ];

  return (
    <div className=" py-10 px-4 " id="services">
      <h2 className="text-2xl font-bold text-center mb-6">
        <div className="border inline py-2 bg-gradient-to-r from-[#FF5733] to-[#C70039] text-white px-4">Location</div>
      </h2>

      {/* Location Box with Border */}
      <div className="max-w-6xl mx-auto border  shadow-lg rounded-lg p-6">
        {/* Location Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg text-center font-bold  text-gray-700"
            >
              {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
