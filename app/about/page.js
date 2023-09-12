import { Suspense } from 'react';

import Profile from '@/components/Profile/Profile';

import Loading from '../loading';

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Profile />
      </main>
    </Suspense>
  );
}
