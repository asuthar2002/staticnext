"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: " What services does Joshi Balloon Decor offer in Bangalore?",
      answer:
        "We offer a variety of decoration services throughout Bangalore, including balloon decorations, flower arrangements, and more. We cater to various events such as birthdays, anniversaries, baby showers, and other celebrations.",
    },
    {
      question:
        " How can I arrange for Balloon Decoration at Home for a celebration in Bangalore?",
      answer:
        "Arranging for Balloon Decoration at home is easy with Joshi Balloon Decor. Simply visit our website, select the Balloon Decoration at Home option, fill in the event details, customize your requirements, and complete the booking process. Our experienced team will handle everything, ensuring your event is beautifully decorated .",
    },
    {
      question: "Do you offer custom balloon decoration designs?",
      answer:
        "Yes, we offer custom balloon decoration designs tailored to your event's theme and style. Whether it's a birthday, wedding, or any other special occasion, we work with you to create a unique setup.",
    },
    {
      question: "How far in advance should I book balloon decoration services?",
      answer:
        "To ensure availability, we recommend booking your balloon decoration at least 1-2 weeks in advance. However, we try our best to accommodate last-minute requests, depending on the event's date and location.",
    },
    {
      question: "Can you decorate for both indoor and outdoor events?",
      answer:
        "Yes, we provide balloon decorations for both indoor and outdoor events. Our team takes care to select the best decoration options suited for the location and weather conditions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-100 py-10 px-4 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gray-100">
        <div className="inline border py-2 px-4 bg-white"> Frequently Asked Questions</div>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
