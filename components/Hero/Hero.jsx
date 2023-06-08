'use client';
import Container from '../Container/Container';
import LastProject from '../LastProject/LastProject';
import { Content, Description, Heading, SubHeading } from './Hero.styles';

const Hero = () => {
    return (
        <Container>
            <Content>
                <SubHeading>Full Stack Developer</SubHeading>
                <Heading>Maksym Parunov</Heading>
                <Description>
                    I develop web applications for various platforms and
                    specialize in server development
                </Description>
                <LastProject />
            </Content>
        </Container>
    );
};

export default Hero;
