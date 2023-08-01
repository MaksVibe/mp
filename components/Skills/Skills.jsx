'use client';
import { Column, List, ListItem, SubHeading, Wrapper } from './Skills.styles';
import { skills } from './skillsDB';

const Skills = () => {
  const { hard, soft } = skills;

  return (
    <Wrapper>
      <Column>
        <SubHeading>Hard</SubHeading>
        <List>
          {hard.map((skill, index) => (
            <ListItem key={index + 1}>
              <p>{skill.skillName}</p>
            </ListItem>
          ))}
        </List>
      </Column>
      <Column>
        <SubHeading>Soft</SubHeading>
        <List>
          {soft.map((skill, index) => (
            <ListItem key={index + 1}>
              <p>{skill.skillName}</p>
            </ListItem>
          ))}
        </List>
      </Column>
    </Wrapper>
  );
};

export default Skills;
