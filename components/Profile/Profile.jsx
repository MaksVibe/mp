'use client';
import Image from 'next/image';

import Container from '../Container/Container';
import { ImgWrapper, TextWrapper, Wrapper } from './Profile.styles';

const Profile = () => {
	return (
		<Container>
			<Wrapper>
				<TextWrapper>
					<h3>Short resume</h3>
					<p>
						As a full-stack web developer with over a year of commercial experience, I have honed my skills in a variety
						of technologies, including React, TypeScript, Next.js and git-cli. My common stack of technologies includes
						React and Node.js.
						<br />
						<br />
						With a focus on clean code and best practices, I am committed to delivering high-quality work that meets
						project deadlines. I have an experience managing a small department.
					</p>
				</TextWrapper>
				<ImgWrapper>
					<Image src={'/profile-pic.jpg'} width={400} height={600} alt="Profile picture" />
				</ImgWrapper>
			</Wrapper>
		</Container>
	);
};

export default Profile;
