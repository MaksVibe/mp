import { Suspense } from 'react';

import Hero from '../components/Hero/Hero';
import TechProf from '../components/TechProf/TechProf';
import Loading from './loading';

export const metadata = {
  title: 'My Profile: Web Developer Proficient in JS, TS, Next.js, Node, and More',
  description:
    'Allow me to introduce myself, I am Maxim Parunov - a web developer with extensive expertise in technologies like JS, TS, Next.js, Node, Express, and more. Discover more about me on LinkedIn and GitHub.',
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <TechProf />
      </Suspense>
    </main>
  );
}
