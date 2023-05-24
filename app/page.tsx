import Image from 'next/image';

import Cards from './PageComponents/Cards';
import Features from './PageComponents/Features';
import Hero from './PageComponents/Hero';
import Polygon from './PageComponents/Polygon';
import Showroom from './PageComponents/Showroom';
import Waitlist from './PageComponents/Waitlist';
import radial from '@/public/radial.svg';
import Loader from './PageComponents/Loader';

export default async function Home() {
  return (
    <main>
      <Loader />
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
  );
}
