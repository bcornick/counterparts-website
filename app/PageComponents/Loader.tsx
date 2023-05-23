'use client';

import { Audiowide } from 'next/font/google';
import Modal from 'react-modal';

import styles from './Loader.module.scss';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

Modal.setAppElement(document.getElementsByTagName('body')[0]);

const Loader = () => {
  return (
    <Modal
      isOpen={true}
      className={styles.loadingOverlay}>
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
    </Modal>
  );
};

export default Loader;
