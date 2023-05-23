import Image from 'next/image';

import AnimatedBlob from './AnimatedBlob';
import blob1 from '@/public/wireblob.png';
import blob2 from '@/public/wireblob2.png';
import blob3 from '@/public/wireblob3.png';
import avatar from '@/public/counterpart-1.png';
import styles from './Features.module.scss';
import FeatureText from './FeatureText';

const features = [
  {
    splineCode: 'lTilo2q0ucCauMpL',
    featureText: 'Create an avatar of your likeness using generative AI',
    staticBlob: blob1,
  },
  {
    splineCode: 'trr-jZ7q8G7pkOM5',
    featureText:
      'Unlock accessories and upgrades through verified real-world actions',
    staticBlob: blob2,
  },
  {
    splineCode: 'OCNVXHb8qfmYAQmI',
    featureText:
      'Export your avatar and showcase your impact across the metaverse',
    staticBlob: blob3,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className={styles.featuresBox}>
      {features.map((item, i) => (
        <div
          key={i}
          className={styles.feature}>
          <AnimatedBlob
            splineUrl={`https://prod.spline.design/${item.splineCode}/scene.splinecode`}
            staticSrc={item.staticBlob}
          />
          <FeatureText text={item.featureText} />
        </div>
      ))}
      <div className={styles.avatarWrapper}>
        <Image
          src={avatar}
          alt="counterpart"
          fill
          sizes="25vw"
          className={styles.avatar}
        />
      </div>
    </section>
  );
};

export default Features;
