"use client";
import { useState, useEffect } from "react";

export default function Description() {
  const longText = `
    <h3>Joshi Balloon Decor – Transforming Your Celebrations in Bangalore with Stunning Balloon Decorations</h3>
    <p>At Joshi Balloon Decor, we specialize in creating beautiful and memorable balloon decorations for all types of events in Bangalore. From birthdays and anniversaries to baby showers and corporate events, we bring vibrant and creative balloon arrangements that will elevate your celebration to the next level. Our dedication to quality and attention to detail ensures that every event we decorate becomes an unforgettable experience for you and your guests.</p>

    <h3>Our Services:</h3>

    <ul>
      <li><strong>Balloon Decorations for Birthdays:</strong>
        <p>Whether it's for a child’s birthday or an adult celebration, our balloon decorations will bring fun and color to the occasion. We offer personalized themes that cater to the personality of the birthday individual, ensuring every detail matches their style and preferences. From vibrant arches to balloon centerpieces, our birthday decorations will add a touch of whimsy to your party.</p>
      </li>

      <li><strong>Anniversary Balloon Decor:</strong>
        <p>Celebrate love and togetherness with our elegant anniversary balloon designs. We craft beautiful balloon arrangements that reflect your unique love story. From classic red and white color schemes to elegant gold and silver accents, our anniversary balloon decorations set the perfect mood for a romantic celebration.</p>
      </li>

      <li><strong>Baby Shower Balloon Decorations:</strong>
        <p>Welcoming a new baby is a momentous occasion, and our baby shower balloon decor is designed to make the event even more special. Choose from a variety of themes like “gender reveal,” “newborn,” or “vintage baby shower” to create a stunning ambiance. Our designs range from delicate pastel balloons to vibrant, fun setups, all created with care to suit your vision.</p>
      </li>

      <li><strong>Corporate Event Balloon Decor:</strong>
        <p>At Joshi Balloon Decor, we understand the importance of making your corporate events stand out. Whether you're hosting a product launch, an annual meeting, or a corporate celebration, we can create a professional yet festive atmosphere with tailored balloon decorations. We offer custom branding options to incorporate your company colors and logos into the decor, ensuring your event stands out in a unique and stylish way.</p>
      </li>

      <li><strong>Themed Balloon Decorations:</strong>
        <p>No matter what type of celebration you’re hosting, we offer themed balloon decor to match the vibe. Whether it’s a vintage, modern, or fairytale theme, our decorators will create a customized setup that’s perfect for your event. Popular themes include birthday parties, baby showers, weddings, festive occasions, and seasonal celebrations.</p>
      </li>

      <li><strong>Balloon Arches, Columns, and Backdrops:</strong>
        <p>Our balloon arches and columns are the perfect way to frame entrances, photo booths, or main stages. Designed to impress, these structures are available in various shapes, sizes, and colors. You can also choose a balloon backdrop to add a stunning visual element to your event. These designs are great for photos, and they’ll surely create lasting memories for everyone attending.</p>
      </li>

      <li><strong>Customized Balloon Bouquets:</strong>
        <p>If you’re looking for smaller yet impactful balloon arrangements, our customized balloon bouquets are ideal for table centerpieces or as gifts for guests. These bouquets can include a variety of colors, sizes, and even personalized messages, making them a special touch for your event.</p>
      </li>
    </ul>

    <h3>Why Choose Joshi Balloon Decor?</h3>
    <ul>
      <li><strong>Expert Designers:</strong> Our team consists of professional decorators who specialize in balloon art. We bring years of experience to each event, ensuring that your celebration is executed flawlessly.</li>
      <li><strong>Affordable Packages:</strong> We believe that beautiful decor shouldn’t break the bank. Our balloon decoration services come in a range of affordable packages that cater to different budgets without compromising on quality.</li>
      <li><strong>End-to-End Service:</strong> From consultation to setup and takedown, we handle all aspects of your balloon decoration needs. You can relax while we take care of everything, making the process stress-free and easy.</li>
      <li><strong>Customized Experience:</strong> We work closely with you to understand your vision and deliver personalized designs that match your theme, style, and preferences.</li>
    </ul>

    <p>Whether you're planning a small, intimate gathering or a grand celebration, Joshi Balloon Decor in Bangalore is here to turn your dreams into reality. Let us bring joy, color, and creativity to your event with our professional balloon decoration services. Reach out to us today, and we’ll help make your special occasion unforgettable!</p>
  `;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure content is only rendered client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const previewText = longText.slice(0, 500); // Show only the first 500 characters initially

  return (
    <div className=" py-10 px-4">
      <div
        id="about"
        className="max-w-6xl mx-auto border  shadow-lg rounded-lg p-6 bg-white mt-10"
      >
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <div className="text-gray-700">
          {isMounted && (
            <div
              dangerouslySetInnerHTML={{
                __html: isExpanded ? longText : previewText,
              }}
            />
          )}
        </div>

        {/* Read More / Read Less Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-500 font-semibold hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
