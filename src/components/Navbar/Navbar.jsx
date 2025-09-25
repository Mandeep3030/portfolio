/**
 * Navbar Component - Main navigation header
 * Features: Responsive design, custom logo, active link highlighting
 * Includes mobile menu toggle and smooth navigation
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/portfolio-data';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="navigation">
      <div className="navbar-container container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo">
            {/* Custom logo using initials MS */}
            <div className="logo-icon">
              <span className="logo-text">MS</span>
            </div>
            <span className="logo-name">Mandeep Singh</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
          <ul className="navbar-nav" role="menubar">
            {navigationItems.map((item) => (
              <li key={item.path} className="navbar-item" role="none">
                <Link
                  to={item.path}
                  className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="navbar-overlay" onClick={closeMenu} aria-hidden="true"></div>
      )}
    </nav>
  );
};

export default Navbar;