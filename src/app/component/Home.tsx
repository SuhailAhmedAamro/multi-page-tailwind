"use client"; // Ensures client-side rendering

import React from "react";

const Home = () => {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Home Page
      </h1>
      <p className="text-xl mt-4 text-gray-700 mb-10">
        This is the main landing page of our simple multi-page website.
      </p>

      {/* Quotes Section */}
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <p className="text-lg text-gray-800 italic">"{quote.text}"</p>
            <p className="text-right text-sm text-blue-500 mt-2">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
