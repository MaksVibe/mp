'use client';
import Container from '../Container/Container';
import BorderBot from '../BorderBot/BorderBot';
import { Column, Wrapper, SubHeading, List, ListItem } from './Skills.styles';
import { skills } from './skillsDB';
import Dots from '../Dots/Dots';

const Skills = () => {
    const { hard, soft } = skills;

    return (
        <>
            <BorderBot>
                <Container>
                    <h2>Skills</h2>
                </Container>
            </BorderBot>
            <Container>
                <Wrapper>
                    <Column>
                        <SubHeading>Hard</SubHeading>
                        <List>
                            {hard.map((skill, index) => (
                                <ListItem key={index + 1}>
                                    <p>{skill.skillName}</p>
                                    <Dots amount={skill.proficiency} />
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
                                    <Dots amount={skill.proficiency} />
                                </ListItem>
                            ))}
                        </List>
                    </Column>
                </Wrapper>
            </Container>
        </>
    );
};

export default Skills;
