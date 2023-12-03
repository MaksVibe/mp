'use client';
import Image from 'next/image';

// import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import { useCopyStore } from '../../utils/copy/copy';
// import useModal from '../../utils/modal/stateModal';
import { BgImg, Content, Description, DescriptionWrapper, Heading, ImgWrapper, Span, Wrapper } from './Hero.styles';

const Hero = () => {
  const {
    copy: { homePage: copy, global: globalCopy },
  } = useCopyStore();
  // const { show } = useModal();

  return (
    <Container>
      <Wrapper>
        <Heading>{copy.title}</Heading>
        <Content>
          <DescriptionWrapper>
            <Description>{copy.body}</Description>
            {/* <Button isHero content={copy.cta} onClick={show} /> */}
          </DescriptionWrapper>
          <ImgWrapper>
            <Image src={'/profile.png'} width={322} height={340} alt="Profile picture" className="" />
          </ImgWrapper>
        </Content>
        <Span>{globalCopy.additional}</Span>
        <BgImg />
      </Wrapper>
    </Container>
  );
};

export default Hero;
