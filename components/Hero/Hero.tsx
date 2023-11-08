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
              My name is Maxim Parunov, and I specialize in web development with significant experience in building web
              applications. I possess in-depth knowledge of JavaScript (JS) and TypeScript (TS), enabling me to craft
              robust and dependable web applications that adhere to contemporary standards.
            </Description>
            <Button hero />
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
