import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Programming Languages⋮ JavaScript (Node.js), Python, TypeScript, SQL',
    'Backend Development⋮ GraphQL, REST APIs, Express.js, Apollo Server',
    'Databases & Storage⋮ MongoDB, PostgreSQL, Redis, Firebase',
    'Blockchain & Web3⋮ Solidity, Web3.js, Ethers.js, AirDAO, Solana Web3.js, BSC (BEP20), TON',
    'Infrastructure & DevOps⋮ Render, Digital Ocean, Nginx, Docker, GitHub Actions',
    'Authentication & Security⋮ JWT, OAuth2, API Keys, Encryption/Decryption',
    'Messaging & Automation⋮ Telegram Bot API, Telegraf, Axios, RabbitMQ',
    'Version Control & Tools⋮ Git, GitHub, VS Code, Postman',
    'Payments & Commerce⋮ Payment Gateway Design, Voucher Systems, API Integrations',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I build backend systems and blockchain-powered solutions that make digital services
              seamless and scalable.
            </p>

            <p>
              With a strong background in backend development, I specialize in designing and
              implementing production-grade APIs, payment gateways, and digital goods platforms. My
              work spans
              <strong>Node.js, GraphQL, MongoDB</strong>, and blockchain ecosystems including
              <strong>AirDAO, Solana, BSC (BEP20), and TON</strong>.
            </p>

            <p>
              I’ve developed platforms like <em>Vscgames</em>—a digital goods ecosystem with
              merchant APIs, voucher automation, and real-time Telegram commerce bots—as well as
              multi-chain gateways such as <em>Argon</em> and token creation portals like{' '}
              <em>DAOME</em>. These projects integrate multiple APIs, handle secure transactions,
              and scale across global user bases.
            </p>

            <p>
              My work combines{' '}
              <strong>software engineering, blockchain integration, and automation</strong> to
              deliver systems that are secure, efficient, and user-focused—bridging the gap between
              decentralized technologies and real-world commerce.
            </p>

            <p>Here is a list of the technologies that I'm familiar with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/uni.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
