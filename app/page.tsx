import Image from 'next/image';

import Cards from './PageComponents/Cards';
import Features from './PageComponents/Features';
import Hero from './PageComponents/Hero';
import Polygon from './PageComponents/Polygon';
import Showroom from './PageComponents/Showroom';
import Waitlist from './PageComponents/Waitlist';
import radial from '@/public/radial.svg';
import loadingTimeout from '@/helpers/loadingTimeout';

export default async function Home() {
  await loadingTimeout(5500);
  const loaded = true;

  return (
    <>
      {loaded && (
        <main>
          <Image
            src={radial}
            alt=""
            width={2000}
            height={40}
            style={{ position: 'absolute' }}
          />
          <Hero />
          <Features />
          <Cards />
          <Showroom />
          <Waitlist />
          <Polygon />
          <Polygon />
        </main>
      )}
    </>
  );
}
