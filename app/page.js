'use client';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import TechProf from '@/components/TechProf/TechProf';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <main>
                <Hero />
                <TechProf />
            </main>
        </Suspense>
    );
}
