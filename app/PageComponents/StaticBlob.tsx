import Image, { StaticImageData } from 'next/image';

import styles from './StaticBlob.module.scss';

interface StaticBlobProps {
  blobSrc: StaticImageData;
}

const StaticBlob = ({ blobSrc }: StaticBlobProps) => {
  return (
    <Image
      src={blobSrc}
      alt=""
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.blob}
    />
  );
};

export default StaticBlob;
