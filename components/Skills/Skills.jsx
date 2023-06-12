'use client';
import Container from '../Container/Container';
import BorderBot from '../BorderBot/BorderBot';
import { Column, Wrapper, SubHeading, List, ListItem } from './Skills.styles';
import skills from './skills';
import Dots from './Dots/Dots';

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
                            {hard.map(skill => (
                                <ListItem
                                    key={
                                        hard.findIndex(item => item == skill) +
                                        1
                                    }
                                >
                                    <p>{skill.skillName}</p>
                                    <Dots amount={skill.proficiency} />
                                </ListItem>
                            ))}
                        </List>
                    </Column>
                    <Column>
                        <SubHeading>Soft</SubHeading>
                        <List>
                            {soft.map(skill => (
                                <ListItem
                                    key={
                                        soft.findIndex(item => item == skill) +
                                        1
                                    }
                                >
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
