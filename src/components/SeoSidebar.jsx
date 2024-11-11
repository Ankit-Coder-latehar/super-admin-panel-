import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const SeoSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar for Laptop Screens */}
      <nav className="flex items-center justify-between p-4 text-[#5546A0] lg:justify-start lg:pl-12 lg:fixed lg:top-0 lg:left-0 lg:w-full z-40">
        <h1 className="text-xl font-bold lg:block hidden">Seo Content</h1>

        {/* Mobile Title and Menu Icon */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <h1 className="text-xl font-bold lg:hidden">Seo Content</h1>
          <button className="text-black p-2 rounded-full" onClick={toggleMenu}>
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex fixed top-12 left-0 h-4/5 w-1/11 bg-[#5546A0] text-white p-4 z-30 rounded-full mt-10 ml-2">
        <div className="flex flex-col items-center space-y-2 mt-2">
          {[
            { href: "/", img: "/element-3.svg", alt: "Dashboard Icon" },
            { href: "/dashboard2", img: "/personalcard.svg", alt: "Calendar Icon" },
            { href: "/branch", img: "/location.svg", alt: "Branch Icon" },
            { href: "/fakebusiness", img: "/brifecase-cross.svg", alt: "Business Icon" },
            { href: "/seoContent", img: "/send-sqaure-2.svg", alt: "SEO Icon", className:"bg-[#111]" },
            { href: "/marketer", img: "/bag-2.svg", alt: "Marketer Icon" },
            { href: "/admins", img: "/security-user.svg", alt: "Admin Icon" },
            { href: "/result", img: "/chart.svg", alt: "Result Icon" },
            { href: "/", img: "/logout.svg", alt: "Logout Icon" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="rounded-lg hover:bg-[#111] transition duration-300 p-2"
            >
              <img src={link.img} alt={link.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </aside>

      {/* Sidebar for Mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-[#5546A0] text-white p-4 transition-transform duration-300 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            <HiX size={24} />
          </button>
        </div>
        <nav className="mt-10 space-y-6">
          {[
            { href: "/", img: "/element-3.svg", label: "Dashboard" },
            { href: "/dashboard2", img: "/personalcard.svg", label: "Calendar" },
            { href: "/branch", img: "/location.svg", label: "Branches" },
            { href: "/fakebusiness", img: "/brifecase-cross.svg", label: "Businesses" },
            { href: "/seoContent", img: "/send-sqaure-2.svg", label: "SEO Content" },
            { href: "/marketer", img: "/bag-2.svg", label: "Marketer" },
            { href: "/admins", img: "/security-user.svg", label: "Admins" },
            { href: "/result", img: "/chart.svg", label: "Results" },
            { href: "/", img: "/logout.svg", label: "Logout" },
          ].map((link, index) => (
            <a key={index} href={link.href} className="flex items-center space-x-2">
              <img src={link.img} alt={link.label} className="w-6 h-6" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SeoSidebar;
