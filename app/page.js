import { Suspense } from 'react';

import Hero from '@/components/Hero/Hero';
import TechProf from '@/components/TechProf/TechProf';

import Loading from './loading';

export const metadata = {
  title: 'Maksym Parunov',
  description: 'Website portfolio and resume of Fullstack Developer Maksym Parunov from Ukraine, Kyiv.',
};

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero />
        <TechProf />
      </main>
    </Suspense>
  );
}
