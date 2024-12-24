"use client"; // Ensures client-side rendering

import React from "react";

const About = () => {
  const teamInfo = [
    {
      name: "John Doe",
      role: "Lead Developer",
      description:
        "John is the mastermind behind the project, designing and coding the backend and frontend with precision.",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      description:
        "Jane creates the beautiful user interfaces and ensures our sites are user-friendly and accessible.",
    },
    {
      name: "Alice Johnson",
      role: "Project Manager",
      description:
        "Alice keeps the team on track, managing deadlines, and ensuring smooth collaboration throughout the project.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6 animate__animated animate__fadeIn">
        About Us
      </h1>
      
      {/* Brief Description */}
      <p className="text-xl mt-4 text-gray-700 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
        We are a small team working on building multi-page React websites. Our mission is to create beautiful, functional,
        and user-friendly websites for clients.
      </p>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {teamInfo.map((member, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s"
          >
            <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
            <p className="text-lg text-gray-800 italic">{member.role}</p>
            <p className="text-gray-700 mt-4">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
