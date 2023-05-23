import Image from 'next/image';

import polygon from '@/public/polygon.svg';
import styles from './Polygon.module.scss';

const Polygon = () => {
  return (
    <figure className={styles.polygon}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src={polygon}
          alt=""
          fill
          sizes="100vw"
        />
      </div>
    </figure>
  );
};

export default Polygon;
