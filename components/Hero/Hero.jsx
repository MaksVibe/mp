'use client';
import Image from 'next/image';

// import Button from '../Button/Button';
import { BgImg,Content, Description, Heading, ImgWrapper, Span, Wrapper } from './Hero.styles';

const Hero = () => {
	return (
		<Wrapper>
			<Heading>Maksym Parunov</Heading>
			<Content>
				<div>
					<Description>
						I develop web applications for various platforms and specialize in server development
					</Description>
					<br />
					<Description style={{ marginBottom: '42px' }}>
						As a full-stack web developer with over a year of commercial experience, I have honed my skills in a variety
						of technologies, including React, TypeScript, Next.js and git-cli. My common stack of technologies includes
						React and Node.js.With a focus on clean code and best practices, I am committed to delivering high-quality
						work that meets project deadlines. I have an experience managing a small department.
					</Description>
					{/* <Button hero="true" /> */}
				</div>
				<ImgWrapper>
					<div>
						<Image src={'/profile.png'} width={322} height={340} alt="Profile picture" className="" />
					</div>
					<Span>develop web applications</Span>
				</ImgWrapper>
			</Content>
			<BgImg />
		</Wrapper>
	);
};

export default Hero;
