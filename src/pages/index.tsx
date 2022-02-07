import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hi, I&apos;m Mehmet!</h1>
      <p>
        I&apos;m a full time front-end developer with a passion for learning new
        technologies. <br /> I like to write clean, efficient and maintainable
        code.
        <br />
        Part time&nbsp;
        <a
          href="https://www.youtube.com/channel/UCPoGp98y4dOQsc3OXkndaeQ?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
        >
          youtuber
        </a>
        &nbsp;and occasional freelancer.
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 14%;
  h1 {
    font-weight: 200;
  }
  p {
    margin-top: 24px;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 0.7px;
    line-height: 26px;

    a {
      padding-bottom: 2px;
      text-decoration: underline;
    }
  }
`;

export default Home;
