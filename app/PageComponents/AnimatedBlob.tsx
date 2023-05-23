'use client';

import { StaticImageData } from 'next/image';
import React, { Suspense, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import StaticBlob from './StaticBlob';
import styles from './AnimatedBlob.module.scss';
import { Waypoint } from 'react-waypoint';

interface AnimatedBlobProps {
  splineUrl: string;
  staticSrc: StaticImageData;
}

const AnimatedBlob = ({ splineUrl, staticSrc }: AnimatedBlobProps) => {
  const [dims, setDims] = useState({ width: '0px', height: '0px' });
  const [inView, setInView] = useState(false);

  let large = true; // can add other sizing if needed

  const displaySizes = {
    large: { width: '20rem', height: '35rem' },
    medium: { width: '', height: '' },
    small: { width: '', height: '' },
  };

  return (
    <Waypoint
      onEnter={() => {
        setInView(true);
      }}
      bottomOffset="30%">
      <div
        className={inView ? `${styles.spline} ${styles.fadeIn}` : styles.spline}
        style={{ width: dims.width, height: dims.height }}>
        <Suspense fallback={<StaticBlob blobSrc={staticSrc} />}>
          <Spline
            scene={splineUrl}
            onLoad={() => {
              large &&
                setDims({
                  width: displaySizes.large.width,
                  height: displaySizes.large.height,
                });
            }}
            className={styles.splineObj}
            style={{ width: dims.width, height: dims.height }}
          />
        </Suspense>
      </div>
    </Waypoint>
  );
};

export default AnimatedBlob;
