'use client';
import Image from 'next/image';

import Skills from '../Skills/Skills';
import { sprite } from './sprite';
import { Content, Heading, Item, Main, MainHeading, Sprite, TechStack, Wrapper } from './TechProf.styles';

const TechProf = () => {
  return (
    <>
      <Main>
        <Wrapper>
          <MainHeading>Skills</MainHeading>
          <Content>
            <Skills />
          </Content>
        </Wrapper>
        <Wrapper>
          <MainHeading>Technical proficiency</MainHeading>
          <Content>
            <TechStack>
              {Object.keys(sprite).map((k, i) => (
                <li key={i + 1}>
                  <Heading>{k}</Heading>
                  <Sprite>
                    {sprite[k].map(
                      (icon, index) =>
                        icon && (
                          <Item key={index + 1}>
                            <Image
                              src={icon.src}
                              width={112}
                              height={112}
                              alt={icon.src.slice(1, icon.src.indexOf('.'))}
                            />
                          </Item>
                        )
                    )}
                  </Sprite>
                </li>
              ))}
            </TechStack>
          </Content>
        </Wrapper>
      </Main>
    </>
  );
};

export default TechProf;
