import React from "react";
import Head from "next/head";
import Home from "./components/Home";
import Description from "./components/Description";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
export default function App() {
  return (
    <>
      <Head>
        <title>Joshieventdecor - Balloon Decor in Bangalore</title>
        <meta
          name="description"
          content="Joshieventdecor specializes in stunning balloon decorations for events in Bangalore. Make your celebration unforgettable with our professional balloon decor services."
        />
        <meta
          name="keywords"
          content="balloon decor, event decoration, Bangalore event decor, wedding decor, party decor, balloon arrangements"
        />
        <meta name="author" content="Joshieventdecor" />

        <meta
          property="og:title"
          content="Joshieventdecor - Balloon Decor in Bangalore"
        />
        <meta
          property="og:description"
          content="We provide top-tier balloon decor services for all types of events in Bangalore. Contact Joshieventdecor for your next celebration!"
        />
        <meta property="og:image" content="/images/joshiBalloonDecor.jpeg" />
        <meta property="og:url" content="https://www.joshieventdecor.com" />
        <meta property="og:type" content="website" />

        {/* Robots Meta  */}
        <meta name="robots" content="index, follow" />

        {/* Favicon Icon */}
        <link rel="icon" href="/images/favicon.ico" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Joshieventdecor",
              url: "https://www.joshieventdecor.com", 
              logo: "/images/favicon.ico", 
              sameAs: [
                "https://wa.me/918882723081",
                "https://www.instagram.com/ballon_decortion_bangalore?utm_source=qr&igsh=ZXRoOHYxOWdnd2Ju",
              ],
            }),
          }}
        />
      </Head>

      <div>
        <Navbar />
        <Home />
        <Location />
        <Description />
        <FAQ />
        <Footer />
        <a
          href="https://wa.me/918882723081?text=Hi%21%20I%27m%20interested%20in%20booking%20a%20balloon%20decoration%20for%20my%20event.%20Can%20you%20help%20me%20with%20the%20details%3F"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          style={{ zIndex: 1000 }}
        >
          <div className="flex items-center">
            <FaWhatsapp size={24} />
            <h2 className="ml-2">Chat</h2>
          </div>
        </a>
        <a
          href="tel:+918882723081"
          className="fixed bottom-5 left-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 sm:hidden"
          style={{ zIndex: 1000 }}
        >
          <div className="flex items-center">
            <FaPhone size={24} />
            <h2 className="ml-2">Call</h2>
          </div>
        </a>
      </div>
    </>
  );
}
