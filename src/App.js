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
import mockup1 from './images/mockup1.jpeg';
import mockup2 from './images/mockup2.jpeg';
import mockup3 from './images/mockup3.jpeg';
import mockup4 from './images/mockup4.jpeg';
import mockup5 from './images/mockup5.jpeg';
import mockup6 from './images/mockup6.jpeg';
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
    overflow: hidden;
  }
`;

const introduction = css`
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

const largeButton = css`
  font-size: 14px;
  font-family: 'Metropolis', 'sans-serif';
  color: #fff;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  padding: 25px 25px;
  letter-spacing: 1px;
  background-color: #28304e;
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;

  :hover {
    background-color: #161a2b;
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
  margin-top: 250px;
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

const flexWrapper = css`
  display: flex;
  justify-content: center;
`;

const containerTemplate = css`
  width: 300px;
  margin-left: 18px;
`;

const gridImages = css`
  margin-bottom: 18px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e9ebee;
`;

const showCase = css`
  display: flex;
  justify-content: center;
  background-color: #bad4e2;
  font-family: 'Metropolis', 'sans-serif';
  color: #28304e;
  margin: 0 auto;
  margin-top: 100px;
  letter-spacing: 0.5px;
  font-size: 25px;

  > h1 {
    font-size: 48px;
    font-weight: 900;
    max-width: 700px;
    width: 100vw;
    padding-top: 50px;
    text-align: center;
  }

  p {
    line-height: 1.5em;
    max-width: 900px;
  }
`;

const mockupContainer = css`
  display: flex;
  justify-content: center;
  background-color: #bad4e2;
  font-family: 'Metropolis', 'sans-serif';
  color: #28304e;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
const mockupContainerElement = css`
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 270px;
  margin-right: 40px;
`;

const mockupContainerImage = css`
  display: flex;

  > img {
    border-radius: 5px;
    width: 270px;
    height: 150px;
    box-shadow: 0 7px 17px rgb(0 0 0 / 13%);
  }
`;

const mockupContainerHeading = css`
  display: flex;

  > h1 {
    font-size: 20px;
    font-weight: 900;
    color: #28304e;
    line-height: 1.5em;
  }
`;

const mockupContainerText = css`
  > p {
    font-size: 14px;
    color: #28304e;
    line-height: 1.5em;
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
        <section css={introduction}>
          <h1>The best online mockup generator</h1>
          <p>
            Design, animate and present your projects with an extensive library
            of mockups right inside the browser with your team.
          </p>
          <button css={buttonStyle}>
            Get started for free
          </button>
          <span>No credit cards required</span>
        </section>
        <div css={videoContainer}>
          <img css={urlVideo} src={urlvideo} alt="browser url video" />
          <video css={videoStyle} src={video} autoPlay={true} muted loop>
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
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
        <div css={flexWrapper}>
          <section css={containerTemplate}>
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
          </section>
          <section css={containerTemplate}>
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
          </section>
          <section css={containerTemplate}>
            <div>
              <img css={gridImages} src={img9} alt="template" />
            </div>
            <div>
              <img css={gridImages} src={img10} alt="template" />
            </div>
            <div>
              <img css={gridImages} src={img11} alt="template" />
            </div>
            <div>
              {' '}
              <video
                css={gridImages}
                src={videotemplate}
                autoPlay={true}
                muted
                loop
              >
                <track
                  src="captions_en_2.vtt"
                  kind="captions"
                  srcLang="en"
                  label="english_captions"
                />
              </video>
            </div>
          </section>
        </div>

        <button css={largeButton}>Browse all templates</button>

        <section css={showCase}>
          <h1>Build your own mockup scene, showcase your designs better</h1>
        </section>
        <section>
          <div css={mockupContainer}>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup1} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>
                  T-Shirt Mockup <br />
                  Templates
                </h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  Create high-quality t-shirt mockups in your browser. Various
                  shirt mockups in different shapes and colors waiting for your
                  designs to be replaced.
                </p>
              </div>
            </div>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup2} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>Screen And App Mockup Templates</h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  Showcase your UI designs with our device mockups. You can find
                  iPhone mockups, iPad mockups, or any other devices to present
                  your designs.
                </p>
              </div>
            </div>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup3} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>Book And Magazine Mockup Templates</h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  See your book cover design in real-life with our book mockups.
                  Put your own designs on pages and import related items to your
                  scene.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div css={mockupContainer}>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup4} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>
                  Website Mockup <br />
                  Templates
                </h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  Customize computer or device screen with your own website
                  design, and create amazing website mockups for presentation or
                  for your portfolio.
                </p>
              </div>
            </div>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup5} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>Business Card Mockup Templates</h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  Customize business card mockup items and create your amazing
                  branding design presentation in minutes right in your browser.
                </p>
              </div>
            </div>
            <div css={mockupContainerElement}>
              <div css={mockupContainerImage}>
                <img src={mockup6} alt="" />
              </div>
              <div css={mockupContainerHeading}>
                <h1>
                  Poster Mockup <br />
                  Templates
                </h1>
              </div>
              <div css={mockupContainerText}>
                <p>
                  Create amazing poster mockups with our amazing collection of
                  templates. Easily place your poster design to frames and
                  create your own environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer />
    </>
  );
}

export default App;
