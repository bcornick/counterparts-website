'use client';

import Image from 'next/image';
import { Waypoint } from 'react-waypoint';
import { Fragment, useState } from 'react';

import blob1 from '@/public/wireblob2.png';
import blob2 from '@/public/wireblob3.png';
import blob3 from '@/public/wireblob.png';
import staticCircle from '@/public/static-circle.png';
import AnimatedCircle from './AnimatedCircle';
import avatar from '@/public/counterpart-2.png';
import avatarNarrow from '@/public/counterpart-2-no-lines.png';
import styles from './Showroom.module.scss';
import useWindowSize from '@/helpers/useWindowSize';

const callouts = [
  {
    title: 'Glasses',
    text: 'Funded climate research',
    bg: blob1,
    className: styles.glasses,
  },
  {
    title: 'Jacket',
    text: 'Organized a local beach clean-up',
    bg: blob2,
    className: styles.jacket,
  },
  {
    title: 'Pants',
    text: 'Mentored STEM students',
    bg: blob3,
    className: styles.pants,
  },
  {
    title: 'Shoes',
    text: 'Volunteered in your community',
    bg: blob1,
    className: styles.shoes,
  },
];

const Showroom = () => {
  const [divsInView, setDivsInView] = useState([0]);
  const size = useWindowSize();

  return (
    <section className={styles.showroomBox}>
      <div className={styles.avatarBox}>
        <Image
          src={size.width && size.width > 768 ? avatar : avatarNarrow}
          alt="counterpart"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.avatar}
        />
        {size.width && size.width > 768 && (
          <AnimatedCircle
            staticSrc={staticCircle}
            splineUrl="https://prod.spline.design/phKR0LlvGe3vQoqK/scene.splinecode"
          />
        )}
      </div>
      {/* test comment */}
      {callouts.map((callout, i) => (
        <Fragment key={i}>
          <Waypoint
            onEnter={() => {
              setDivsInView([...divsInView, i + 1]);
            }}
            bottomOffset={'20%'}>
            <div
              className={
                divsInView.includes(i + 1)
                  ? `${styles.callOut} ${callout.className} ${styles.fadeIn}`
                  : `${styles.callOut} ${callout.className}`
              }>
              <h3 className={styles.head}>{callout.title}</h3>
              <p className={styles.text}>{callout.text}</p>
              <div className={styles.bgContainer}>
                <Image
                  src={callout.bg}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.bgBlob}
                />
              </div>
            </div>
          </Waypoint>
        </Fragment>
      ))}
    </section>
  );
};

export default Showroom;
