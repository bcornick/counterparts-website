'use client';

import styles from './StartBtn.module.scss';

const StartBtn = () => {
  const scrollToPos = () => {
    const yOffset = -20;
    const element = document.getElementById('features');
    const y =
      element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div
      className={styles.startBtn}
      onClick={scrollToPos}>
      Launch
    </div>
  );
};

export default StartBtn;
