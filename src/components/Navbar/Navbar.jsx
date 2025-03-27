import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['👾 Home', '🕹 About', '🎮 Projects', '📟 Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={e => {
            e.preventDefault();
            document
              .getElementById('Home')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="large-logo">HARSHIT</span>
          <span className="small-logo">M</span>
        </div>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="50" height="24" viewBox="0 0 50 24">
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={
                isOpen
                  ? { d: 'M5 12h35M30 5l12 7-12 7' } // Longer arrow with an elegant head
                  : { d: 'M45 12H10M20 5l-12 7 12 7' } // Clean reverse animation
              }
            />
          </svg>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <ul className="sidebar-menu">
          {items.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#${section.replace(/[\s👾🕹🎮📟]/g, '')}`}
                className="sidebar-item"
                onClick={e => {
                  e.preventDefault();
                  const sectionId = section.replace(/[\s👾🕹🎮📟]/g, '');
                  document
                    .getElementById(sectionId)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
