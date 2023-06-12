import Header from '@/components/Header/Header';
import Profile from '@/components/Profile/Profile';
import Skills from '@/components/Skills/Skills';
import { Suspense } from 'react';
import Loading from '../loading';

export default function About() {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <main>
                <Profile />
                <Skills />
            </main>
        </Suspense>
    );
}
