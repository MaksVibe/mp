export const skills: SkillsType = {
  hard: [
    { skillName: 'JavaScript', proficiency: 4 },
    { skillName: 'TypeScript', proficiency: 2 },
    { skillName: 'React', proficiency: 3 },
    { skillName: 'Redux', proficiency: 3 },
    { skillName: 'HTML', proficiency: 5 },
    { skillName: 'CSS', proficiency: 4 },
    { skillName: 'SASS', proficiency: 4 },
    { skillName: 'Node.js', proficiency: 2 },
    { skillName: 'Express.js', proficiency: 2 },
    { skillName: 'Next.js', proficiency: 3 },
    { skillName: 'React Native', proficiency: 2 },
    { skillName: 'Parcel', proficiency: 4 },
    { skillName: 'Gulp', proficiency: 2 },
    { skillName: 'Bootstrap', proficiency: 1 },
    { skillName: 'NPM', proficiency: 4 },
    { skillName: 'YARN', proficiency: 4 },
    { skillName: 'git', proficiency: 4 },
    { skillName: 'Postman', proficiency: 5 },
    { skillName: 'Docker', proficiency: 2 },
    { skillName: 'GitHub', proficiency: 4 },
    { skillName: 'Bitbucket', proficiency: 3 },
    { skillName: 'Axios', proficiency: 3 },
    { skillName: 'Tailwind', proficiency: 2 },
    { skillName: 'Styled-components', proficiency: 4 },
    { skillName: 'ESLint', proficiency: 3 },
    { skillName: 'Prettier', proficiency: 3 },
    { skillName: 'MongoDB', proficiency: 2 },
    { skillName: 'Netlify', proficiency: 4 },
    { skillName: 'Heroku', proficiency: 3 },
    { skillName: 'Vercel', proficiency: 4 },
    { skillName: 'Jira', proficiency: 3 },
    { skillName: 'TeamWork', proficiency: 3 },
    { skillName: 'Trello', proficiency: 5 },
  ],
  soft: [
    { skillName: 'Programming', proficiency: 4 },
    { skillName: 'Familiar with UI/UX', proficiency: 2 },
    { skillName: 'Code troubleshooting', proficiency: 3 },
    { skillName: 'Self-development', proficiency: 4 },
    { skillName: 'Time management', proficiency: 3 },
    { skillName: 'Team work', proficiency: 3 },
    { skillName: 'Analytical thinking', proficiency: 3 },
    { skillName: 'Stress resistance', proficiency: 4 },
  ],
};

type SkillsType = {
  hard: SkillType[];
  soft: SkillType[];
};

type SkillType = {
  skillName: string;
  proficiency: number;
};
