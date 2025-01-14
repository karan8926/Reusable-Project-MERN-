import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { FaGlobe } from "react-icons/fa";
import { FaHotTub } from "react-icons/fa";

const Sidebar = () => {

  const menuItems = [
    {
      label: "Dashboard",
      href: "#",
      icon: <FaGlobe />,
    },
    {
      label: "Users",
      href: "#",
      icon: <FaHotTub />,

    },
    {
      label: "Products",
      href: "#",
      icon: <FaGlobe />,
    },
    {
      label: "Sign In",
      href: "#",
      icon: <FaHotTub />,

    },
    {
      label: "Sign Up",
      href: "#",
      icon: <FaGlobe />,
    },
  ];


  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 text-[18px] font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className="ms-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
