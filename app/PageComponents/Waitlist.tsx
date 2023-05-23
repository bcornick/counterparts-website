'use client';

import Image from 'next/image';
import { Audiowide } from 'next/font/google';

import EmailForm from './EmailForm';
import counterparts from '@/public/counterparts-group.png';
import styles from './Waitlist.module.scss';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const Waitlist = () => {
  const [inView, setInView] = useState(false);

  return (
    <section
      id="waitlist"
      className={styles.waitlistBox}>
      <Image
        src={counterparts}
        alt="counterparts"
        fill
        sizes="90vw"
        className={styles.groupImage}
      />
      <Waypoint
        onEnter={() => {
          setInView(true);
        }}>
        <div
          className={
            inView
              ? `${styles.formContainer} ${styles.fadeIn}`
              : styles.formContainer
          }>
          <h3 className={styles.head}>Be the first</h3>
          <p className={styles.subText}>
            Sign up to reserve your 1st generation{' '}
            <span className={audiowide.className}>
              COUNTER<span className={styles.part}>PART</span>
            </span>
          </p>
          <EmailForm />
        </div>
      </Waypoint>
    </section>
  );
};

export default Waitlist;
