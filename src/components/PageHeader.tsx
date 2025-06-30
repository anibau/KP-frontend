import {
  FiMaximize, FiMinimize,
  FiUser,
  FiEdit,
  FiSettings,
  FiCompass,
  FiPower,
} from "react-icons/fi";

import React, { useState, useRef, useEffect } from "react";

interface PageHeaderProps {
  onHamburgerClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onHamburgerClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Maneja cambios de pantalla completa
  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="w-full bg-white shadow">
      <div className=" flex items-center justify-between py-2">
        {/* Left */}
        <div className="flex items-center">
          <a className="main-header-menu-icon block lg:hidden mr-4" href="#" id="mainNavShow" onClick={e => { e.preventDefault(); if (onHamburgerClick) { onHamburgerClick(); } }}>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </a>
          <a className="main-logo" href="/">
            <img
              src="/public/assets/logoKiwi.jpeg"
              className="header-brand-img desktop-logo h-8"
              alt="logo"
            />
          </a>
        </div>
        
        {/* Right */}
        <div className="main-header-right flex items-center space-x-4">
          <div className="dropdown d-md-flex">
            <button className="nav-link icon full-screen-link" onClick={handleFullscreen} aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}>
              {isFullscreen ? (
                <FiMinimize className="fullscreen-button exit-fullscreen header-icons" />
              ) : (
                <FiMaximize className="fullscreen-button fullscreen header-icons" />
              )}
            </button>
          </div>
          <div className="dropdown main-profile-menu relative" ref={menuRef}>
            <a className="d-flex cursor-pointer" href="#" onClick={e => { e.preventDefault(); setMenuOpen(v => !v); }}>
              <span className="main-img-user">
                <img alt="avatar" src="/public/assets/user.svg" className="rounded-full h-8 w-8" />
              </span>
            </a>
            {/* Dropdown menu */}
            <div className={`dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded ${menuOpen ? '' : 'hidden'}`}>
              <div className="header-navheading p-2 border-b">
                <h6 className="main-notification-title font-bold">Sonia Taylor</h6>
                <p className="main-notification-text text-xs text-gray-500">Web Designer</p>
              </div>
              <a className="dropdown-item border-t px-4 py-2 hover:bg-gray-100 flex items-center" href="/profile">
              <FiUser className="mr-2" /> My Profile
              </a>
              <a className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center" href="/profile">
              <FiEdit className="mr-2" /> Edit Profile
              </a>
              <a className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center" href="/profile">
              <FiSettings className="mr-2" /> Account Settings
              </a>
              <a className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center" href="/profile">
              <FiSettings className="mr-2" /> Support
              </a>
              <a className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center" href="/profile">
              <FiCompass className="mr-2" /> Activity
              </a>
              <a className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center" href="/signin">
              <FiPower className="mr-2" /> Sign Out
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PageHeader;