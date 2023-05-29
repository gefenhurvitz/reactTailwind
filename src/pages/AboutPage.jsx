import React from "react";

import gefenProfile from "../assets/images/gefenProfile.jpeg";
import ghLogo from "../assets/images/ghLogo.png";


const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
          <img
            src={gefenProfile}
            alt="Your Picture"
            className="w-48 h-48 rounded-full mb-4"
          />
          <img
            src={ghLogo}
            alt="Company Logo"
            className="w-24 h-24 mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-center mb-8">
            Hi there! My name is [Your Name], and I'm passionate about
            mathematics and logistics. As an entrepreneur, I started my own
            company with a mission to help small businesses establish and
            enhance their online presence. I understand that many small business
            owners are focused on their artistic talents and may find the
            logistics of managing various online platforms overwhelming. That's
            where I come in! My goal is to assist artists and small business
            owners in navigating the digital landscape, enabling them to
            showcase their work and connect with their target audience
            effectively. Through my services, I provide support in setting up
            and optimizing online platforms such as Instagram, WhatsApp, Google,
            and more. By connecting these platforms and streamlining their
            online presence, I aim to empower small businesses to reach a wider
            audience, increase their visibility, and achieve greater success in
            their respective industries. I believe that every artist and
            entrepreneur deserves the opportunity to thrive in the digital
            world. Let's work together to enhance your online presence and
            unlock the full potential of your business! Feel free to reach out
            to me to discuss how I can help your business grow and succeed.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-center mb-8">
            Explain your company's mission and how you aim to support small
            businesses by providing them with online presence solutions across
            platforms like Instagram, WhatsApp, Google, and more. Emphasize the
            value of connecting these platforms to enhance their business
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
