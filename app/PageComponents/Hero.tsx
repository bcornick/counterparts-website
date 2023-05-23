import Image from 'next/image';

import card1 from '@/public/avatar-card-1.jpg';
import card2 from '@/public/avatar-card-2.jpg';
import card3 from '@/public/avatar-card-3.jpg';
import styles from './Hero.module.scss';
import StartBtn from './StartBtn';

const Hero = () => {
  const cards = [card1, card2, card3];

  return (
    <div className={styles.heroBox}>
      <div className={styles.leftContent}>
        <h1 className={styles.mainHeader}>
          <span>Digital avatars to reflect your</span> real world impact
        </h1>
        <h4 className={styles.subHeader}>
          A virtual twin of your contributions towards humanity, for use across
          the metaverse
        </h4>
        <StartBtn />
      </div>
      <div className={styles.rightContent}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={styles.cardBox}>
            <Image
              src={card}
              alt="avatar-card"
              fill
              sizes="15vw"
              className={styles.avatarCard}
            />
            <div className={styles.border}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
