import './App.css';
import '@fontsource/metropolis';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mainlogo from './images/mainlogo.svg';

const bannerContainer = css`
  position: absolute;
  background-color: #ffada6;
  max-height: 871px;
  margin-bottom: 273px;
  z-index: 50;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 120px;
  margin-right: 180px;
  margin-bottom: 120px;
  z-index: 100;
`;

const navbarStyles = css`
  display: flex;
  margin-left: auto;

  a {
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Metropolis', 'sans-serif';
    color: #28304e;
    font-weight: bold;
    font-size: 12px;
    margin-left: 50px;
  }
`;

const Introduction = css`
  font-family: 'Metropolis', 'sans-serif';
  color: #28304e;
  font-size: 12px;
  margin-left: 266px;
  letter-spacing: 0.5px;
  font-size: 25px;
  max-width: 900px;

  > h1 {
    display: inline;
    font-size: 50px;
    font-weight: 900;
  }

  p {
    line-height: 1.5em;
  }

  span {
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Metropolis', 'sans-serif';
    color: #28304e;
    font-size: 10px;
    margin-left: 50px;
  }
`;

const buttonStyle = css`
  font-size: 14px;
  font-family: 'Metropolis', 'sans-serif';
  color: #28304e;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  letter-spacing: 1px;
  background-color: #fff;
  text-transform: uppercase;

  :hover {
    background-color: #fff;
  }
`;

function App() {
  return (
    <>
      <div css={bannerContainer}>
        <header css={headerStyles}>
          <img src={mainlogo} alt="artboard logo" />
          <div css={navbarStyles}>
            <div>
              <a href="./templates.js">Templates</a>
            </div>
            <div>
              <a href="./items.js">Items</a>
            </div>
            <div>
              <a href="./features.js">Features</a>
            </div>
            <div>
              <a href="./pricing.js">Pricing</a>
            </div>
            <div>
              <a href="./use-case.js">Use Case</a>
            </div>
            <div>
              <a href="./start-designing.js">Start Designing</a>
            </div>
          </div>
        </header>
        <section css={Introduction}>
          <h1>The best online mockup generator</h1>
          <p>
            Design, animate and present your projects with an extensive library
            of mockups right inside the browser with your team.
          </p>
          <button css={buttonStyle} onClick="https://app.artboard.studio/login">
            Get started for free
          </button>
          <span>No credit cards required</span>
        </section>
      </div>
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
