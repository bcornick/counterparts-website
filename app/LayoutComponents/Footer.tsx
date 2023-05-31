import Image from 'next/image';

import counterparts from '@/public/counterparts-logo.svg';
import twitter from '@/public/twitter.svg';
import linkedin from '@/public/linkedin.svg';
import github from '@/public/github.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <div className={styles.leftContent}>
        <div className={styles.logoBox}>
          <Image
            src={counterparts}
            alt="counterparts"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.logo}
          />
        </div>
        <p className={styles.copyright}>&copy; 2023 Counterparts, Inc.</p>
      </div>
      <ul className={styles.socials}>
        <li className={styles.social}>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className={styles.iconBox}>
            <Image
              src={twitter}
              alt="twitter"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className={styles.social}>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className={styles.iconBox}>
            <Image
              src={linkedin}
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className={styles.social}>
          <a
            href="https://github.com/bcornick/counterparts-website"
            rel="noreferrer"
            target="_blank"
            className={styles.iconBox}>
            <Image
              src={github}
              alt="github"
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
