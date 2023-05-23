'use client';

import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

import styles from './FeatureText.module.scss';

interface FeatureTextProps {
  text: string;
}

const FeatureText = ({ text }: FeatureTextProps) => {
  const [inView, setInView] = useState(false);

  return (
    <Waypoint
      onEnter={() => {
        setInView(true);
      }}
      bottomOffset={'15%'}>
      <h4 className={inView ? `${styles.text} ${styles.fadeIn}` : styles.text}>
        {text}
      </h4>
    </Waypoint>
  );
};

export default FeatureText;
