import Container from '../../common/Container/Container';
import { Heading, Wrapper } from './Profile.styles';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Short resume</Heading>
        <p>
          I have a strong command of widely-used frameworks such as Next.js and Express, empowering me to create
          innovative and user-friendly web projects. Furthermore, I&apos;ve garnered substantial experience in working
          with Node.js, which broadens my capabilities in constructing server-side applications and APIs.
          <br />
          <br />
          In addition to my project work, I actively share my knowledge and contributions on GitHub. You can check out
          my profile <a href="https://github.com/MaksVibe">here</a> and become a part of the developer community.
          <br />
          <br />
          I, Maxim Parunov, am a seasoned professional who combines technical proficiency with a creative approach to
          web development. My <a href="https://www.linkedin.com/in/maksym-parunov/">LinkedIn profile</a> provides
          further insight into my skills and experience in this field. If you&apos;re in search of a web developer with
          a deep understanding of modern technologies, I&apos;m here to assist you with your project.
        </p>
      </Wrapper>
    </Container>
  );
};

export default Profile;
