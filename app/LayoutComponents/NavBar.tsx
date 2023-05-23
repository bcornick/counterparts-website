'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import logo from '@/public/counterparts-logo.svg';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPos = (pos: 'top' | 'wait' | 'learn') => {
    let element;
    let y;
    let yOffset;
    switch (pos) {
      case 'top':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'wait':
        element = document.getElementById('waitlist');
        yOffset = 100;
        y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        break;
      case 'learn':
        element = document.getElementById('features');
        yOffset = -50;
        y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        break;
    }
  };

  return (
    <div
      className={
        scrollPosition < 20
          ? styles.navBox
          : `${styles.navBox} ${styles.scrolled}`
      }>
      <nav className={styles.innerNav}>
        <div className={styles.logoBox}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Counterparts"
            fill
            sizes="15vw"
            priority
            onClick={() => {
              scrollToPos('top');
            }}
          />
        </div>
        <ul className={styles.links}>
          <li
            className={styles.link}
            // onClick={() => {
            //   scrollToPos('learn');
            // }}
          >
            Coming Soon
          </li>
          <li
            className={styles.button}
            onClick={() => {
              scrollToPos('wait');
            }}>
            Wait List
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
