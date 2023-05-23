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
      sizes="50vw"
      className={styles.blob}
    />
  );
};

export default StaticBlob;
