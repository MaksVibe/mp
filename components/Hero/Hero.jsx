'use client';
import Image from 'next/image';

import Button from '../Button/Button';
import Container from '../Container/Container';
import { BgImg, Content, Description, DescriptionWrapper, Heading, ImgWrapper, Span, Wrapper } from './Hero.styles';

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Maksym Parunov</Heading>
        <Content>
          <DescriptionWrapper>
            <Description>
              I develop web applications for various platforms and specialize in server development
            </Description>
            <Description>
              As a full-stack web developer with over two years of commercial experience, I have honed my skills in a
              variety of technologies, including React, TypeScript, Next.js and git-cli. My common stack of technologies
              includes React and Node.js.With a focus on clean code and best practices, I am committed to delivering
              high-quality work that meets project deadlines. I have an experience managing a small department.
            </Description>
            <Button hero="true" />
          </DescriptionWrapper>
          <ImgWrapper>
            <Image src={'/profile.png'} width={322} height={340} alt="Profile picture" className="" />
          </ImgWrapper>
        </Content>
        <Span>develop web applications</Span>
        <BgImg />
      </Wrapper>
    </Container>
  );
};

export default Hero;
