import './App.css';
import '@fontsource/metropolis';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import img1 from './images/img1.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import mainlogo from './images/mainlogo.svg';
import urlvideo from './images/url-video.webp';
import video from './videos/main-banner-video.mp4';
import videotemplate from './videos/videoTemplate.webm';

const bannerContainer = css`
  padding: 0px;
  position: relative;
  background-color: #ffada6;
  max-height: 720px;
  margin-bottom: 273px;
  z-index: 50;
  width: 100%;
  height: 100vh;
  margin: 0px;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
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
    font-size: 48px;
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
    background-color: #d0d6db;
  }
`;

const divWrapper = css`
  max-width: 100vw;
  overflow: hidden;
`;

const blueFadeTop = css`
  padding: 0px;
  margin: 0px;
  display: block;
  padding: 0px;
  background: #bad4e2;
  border-style: solid;
  border-width: 150px 0 0px 145vw;
  border-color: #ffada6 #bad4e2 transparent transparent;
  z-index: 0;
`;

const blueFadeBottom = css`
  padding: 0px;
  margin: 0px;
  display: block;
  padding: 0px;
  background: #bad4e2;
  transform: rotateX(180deg);
  border-style: solid;
  border-width: 150px 0 0px 145vw;
  border-color: #fff #bad4e2 transparent transparent;
  z-index: 0;
`;

const videoContainer = css`
  margin-left: 0px;
  margin-top: 80px;
  z-index: 0;
`;

const urlVideo = css`
  display: block;
  margin: auto;
  width: 1140px;
  border-radius: 5px 5px 0px 0px;
`;

const videoStyle = css`
  display: block;
  margin: auto;
  margin-top: 0px;
  width: 1140px;
  height: auto;
`;

const backgroundLibrary = css`
  background-color: #fff;
  font-family: 'Metropolis', 'sans-serif';
  color: #28304e;
  font-size: 12px;
  margin-left: 266px;
  margin-top: 200px;
  letter-spacing: 0.5px;
  font-size: 25px;

  > h1 {
    font-size: 48px;
    font-weight: 900;
    max-width: 700px;
  }

  p {
    line-height: 1.5em;
    max-width: 900px;
  }
`;

const containerTemplates = css`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 20px;
`;

const gridImages = css`
  width: 100%;
  border-radius: 5px;
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
        <div css={videoContainer}>
          <img css={urlVideo} src={urlvideo} alt="browser url video" />
          <video css={videoStyle} src={video} autoplay="true" muted loop>
            <track
              src="captions_en.vtt"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
          </video>
        </div>
      </div>
      <div css={divWrapper}>
        <div css={blueFadeTop} />
        <div css={blueFadeBottom} />
      </div>
      <main>
        <section css={backgroundLibrary}>
          <h1>Ever-growing library of mockups and templates.</h1>
          <p>
            Choose from our carefully crafted free mockup templates, or start
            from scratch and design your own scene with our extensive library of
            items.
          </p>
        </section>
        <section css={containerTemplates}>
          <div>
            <img css={gridImages} src={img1} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img2} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img3} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img4} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img5} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img6} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img7} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img8} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img9} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img10} alt="template" />
          </div>
          <div>
            <img css={gridImages} src={img11} alt="template" />
          </div>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
