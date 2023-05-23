'use client';

import { Audiowide } from 'next/font/google';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Waypoint } from 'react-waypoint';

import background from '@/public/wireblob.png';
import card1 from '@/public/level1.jpg';
import card2 from '@/public/level2.jpg';
import card3 from '@/public/level3.jpg';
import styles from './Cards.module.scss';
import StaticBlob from './StaticBlob';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const cards = [
  { image: card1, level: 1 },
  { image: card2, level: 2 },
  { image: card3, level: 3 },
];

const Cards = () => {
  const [headInView, setHeadInView] = useState(false);
  const [cardsInView, setCardsInView] = useState([0]);
  const [subInView, setSubInView] = useState(false);

  return (
    <section className={styles.cardBox}>
      <Waypoint
        onEnter={() => {
          setHeadInView(true);
        }}>
        <h2
          className={
            headInView ? `${styles.fadeIn} ${styles.mainText}` : styles.mainText
          }>
          Make your{' '}
          <span
            style={audiowide.style}
            className={styles.counterpart}>
            counter<span>part</span>
          </span>{' '}
          as awesome as you are.
        </h2>
      </Waypoint>
      <div className={styles.cards}>
        {cards.map((item, i) => (
          <div
            key={i}
            className={
              cardsInView.includes(i + 1)
                ? `${styles.fadeIn} ${styles.item}`
                : styles.item
            }>
            <Waypoint
              onEnter={() => {
                setCardsInView([...cardsInView, i + 1]);
              }}
              bottomOffset={'60%'}>
              <div className={styles.card}>
                <Image
                  src={item.image}
                  alt="avatar card"
                  fill
                  sizes="30vw"
                  className={styles.cardImage}
                />
              </div>
            </Waypoint>
            <h3 className={styles.label}>Level {item.level}</h3>
          </div>
        ))}
      </div>
      <Waypoint
        onEnter={() => {
          setSubInView(true);
        }}>
        <h3
          className={
            subInView ? `${styles.fadeIn} ${styles.subText}` : styles.subText
          }>
          A new digital status symbol <span>more meaningful</span> than a
          follower count
        </h3>
      </Waypoint>
      <div className={styles.blobContainer}>
        <StaticBlob blobSrc={background} />
      </div>
    </section>
  );
};

export default Cards;
