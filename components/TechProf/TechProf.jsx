'use client';
import Container from '../Container/Container';
import {
    Content,
    Heading,
    Sprite,
    Item,
    TechStack,
    Technology,
} from './TechProf.styles';
import sprite from './sprite';
import Image from 'next/image';
import BorderBot from '../BorderBot/BorderBot';

const TechProf = () => {
    return (
        <>
            <BorderBot>
                <Container>
                    <Heading>Technical proficiency</Heading>
                </Container>
            </BorderBot>
            <Content>
                <Container>
                    <TechStack>
                        {Object.keys(sprite).map((k, i) => (
                            <Technology key={i + 1}>
                                <h3>{k}</h3>
                                <Sprite>
                                    {sprite[k].map(
                                        (icon, index) =>
                                            icon && (
                                                <Item key={index + 1}>
                                                    <Image
                                                        src={icon.src}
                                                        width={120}
                                                        height={120}
                                                        alt={icon.src.slice(
                                                            1,
                                                            icon.src.indexOf(
                                                                '.'
                                                            )
                                                        )}
                                                    />
                                                </Item>
                                            )
                                    )}
                                </Sprite>
                            </Technology>
                        ))}
                    </TechStack>
                </Container>
            </Content>
        </>
    );
};

export default TechProf;
