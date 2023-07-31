'use client';
import Image from 'next/image';

import { sprite } from './sprite';
import { Content, Heading, Item, MainHeading, Sprite, TechStack } from './TechProf.styles';

const TechProf = () => {
  return (
    <Content>
      <MainHeading>Technical proficiency</MainHeading>
      <TechStack>
        {Object.keys(sprite).map((k, i) => (
          <li key={i + 1}>
            <Heading>{k}</Heading>
            <Sprite>
              {sprite[k].map(
                (icon, index) =>
                  icon && (
                    <Item key={index + 1}>
                      <Image src={icon.src} width={112} height={112} alt={icon.src.slice(1, icon.src.indexOf('.'))} />
                    </Item>
                  )
              )}
            </Sprite>
          </li>
        ))}
      </TechStack>
    </Content>
  );
};

export default TechProf;
