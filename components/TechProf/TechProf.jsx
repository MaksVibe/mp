'use client';
import Container from '../Container/Container';
import {
    BG,
    Content,
    Heading,
    Sprite,
    Item,
    SubHeading,
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
                        <Technology>
                            <h3>Languages</h3>
                            <Sprite>
                                {sprite.languages.map(icon => (
                                    <Item
                                        key={sprite.languages.indexOf(icon) + 1}
                                    >
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                        <Technology>
                            <h3>Libraries</h3>
                            <Sprite>
                                {sprite.libraries.map(icon => (
                                    <Item
                                        key={sprite.libraries.indexOf(icon) + 1}
                                    >
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                        <Technology>
                            <h3>Frameworks</h3>
                            <Sprite>
                                {sprite.frameworks.map(icon => (
                                    <Item
                                        key={
                                            sprite.frameworks.indexOf(icon) + 1
                                        }
                                    >
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                        <Technology>
                            <h3>Tools</h3>
                            <Sprite>
                                {sprite.tools.map(icon => (
                                    <Item key={sprite.tools.indexOf(icon) + 1}>
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                        <Technology>
                            <h3>Deploy</h3>
                            <Sprite>
                                {sprite.deploy.map(icon => (
                                    <Item key={sprite.deploy.indexOf(icon) + 1}>
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                        <Technology>
                            <h3>Other</h3>
                            <Sprite>
                                {sprite.other.map(icon => (
                                    <Item key={sprite.other.indexOf(icon) + 1}>
                                        <Image
                                            src={icon.src}
                                            width={120}
                                            height={120}
                                            alt={icon.src.slice(
                                                1,
                                                icon.src.indexOf('.')
                                            )}
                                        />
                                    </Item>
                                ))}
                            </Sprite>
                        </Technology>
                    </TechStack>
                </Container>
            </Content>
        </>
    );
};

export default TechProf;
