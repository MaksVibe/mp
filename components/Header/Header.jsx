'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import {
    ProgressContainer,
    ProgressBar,
    Content,
    Nav,
    Wrapper,
} from './Header.styles';

const Header = () => {
    const [scrolledPx, setScrolledPx] = useState(null);
    const [scrolled, setScrolled] = useState(null);

    useEffect(() => {
        const onScroll = () => setScrolledPx(scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const bodyHeight =
            document.getElementsByTagName('body')[0].clientHeight;
        const neededHeight =
            (scrolledPx / (bodyHeight - window.innerHeight)) * 100;
        setScrolled(Math.round(neededHeight));
    }, [scrolledPx]);

    return (
        <Wrapper scrolled={scrolled}>
            <Container>
                <Content>
                    <Link href="/">M.P.</Link>
                    {/* <Nav>
                        <Link href="/">Portfolio</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contacts</Link>
                    </Nav> */}
                </Content>
            </Container>

            <ProgressContainer>
                <ProgressBar scrolled={scrolled} />
            </ProgressContainer>
        </Wrapper>
    );
};

export default Header;
