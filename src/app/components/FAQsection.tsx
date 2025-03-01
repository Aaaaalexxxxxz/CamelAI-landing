"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export const FAQsection = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Sample FAQ data
  const faqs = [
    {
      question: "How is my data stored?",
      answer:
        "camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our Security Policy and our security blog post.",
    },
    {
      question: "Do you train on my data?",
      answer:
        "No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies here.",
    },
    {
      question: "Are my app connections secure?",
      answer:
        "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.",
    },
    {
      question: "How do you pull my data?",
      answer:
        "camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.",
    },
  ];

  return (
    <div className="content_wrapper">
      <section className="max-w-2xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)} // Toggle open/close
                className="cursor-pointer py-4 px-4 bg-transparent rounded-lg transition-all duration-300 ease-in-out transform flex justify-between items-center"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                {/* Arrow icon */}
                <div
                  className={`transition-transform duration-300 transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FiChevronDown className="w-6 h-6" />
                </div>
              </div>

              {/* Answer Dropdown */}
              <div
                className={`px-4 py-2 bg-gray-100/10 text-white-700 overflow-hidden transition-all duration-500 ease-in-out rounded-xl`}
                style={{
                  maxHeight: openIndex === index ? "500px" : "0", // Set max-height for smooth transition
                  paddingTop: openIndex === index ? "10px" : "0", // Optional: Add padding when open for a smoother collapse
                  paddingBottom: openIndex === index ? "10px" : "0", // Optional: Add padding when open for a smoother collapse
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
