'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './FeatureAvatar.module.scss';

interface FeatureAvatarProps {
  avatarSrc: StaticImageData;
}

const FeatureAvatar = ({ avatarSrc }: FeatureAvatarProps) => {
  const [inView, setInView] = useState(false);

  return (
    <div
      className={
        inView
          ? `${styles.avatarWrapper} ${styles.fadeIn}`
          : styles.avatarWrapper
      }>
      <Waypoint
        onEnter={() => {
          setInView(true);
        }}
        bottomOffset="30%">
        <Image
          src={avatarSrc}
          alt="counterpart"
          fill
          sizes="25vw"
          className={styles.avatar}
        />
      </Waypoint>
    </div>
  );
};

export default FeatureAvatar;
