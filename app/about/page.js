import { Suspense } from 'react';

import Profile from '@/components/Profile/Profile';
import Skills from '@/components/Skills/Skills';

import Loading from '../loading';

export default function About() {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<Profile />
				<Skills />
			</main>
		</Suspense>
	);
}
