import { Audiowide } from 'next/font/google';

import styles from './Loader.module.scss';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const Loader = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingBox}>
        <div className={styles.textBox}>
          <div className={styles.text}>Initializing</div>
          <div className={styles.text}>Initializing.</div>
          <div className={styles.text}>Initializing..</div>
          <div className={styles.text}>Initializing...</div>
          <div className={styles.text}>
            Welcome to{' '}
            <span
              style={audiowide.style}
              className={styles.counterpart}>
              COUNTER<span>PARTS</span>
            </span>
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.color}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
