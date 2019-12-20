/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HomeSplash(props) {
  const { siteConfig } = props;

  return (
    <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          <img
            alt="Logo"
            className="index-hero-logo"
            src={`${siteConfig.baseUrl}img/logo192.png`}
          />
          {siteConfig.title} makes it easy to{" "}
          <span className="index-hero-project-keywords">
            YOUR_SOLVED_PROBLEM
          </span>
          .
        </h1>
        <div className="index-ctas">
          <a
            className="button index-ctas-get-started-button"
            href={`${siteConfig.baseUrl}docs/getting-started`}
          >
            Get Started
          </a>
          <a
            style={{ marginTop: 10 }}
            className="button index-ctas-get-started-button"
            href={siteConfig.repoUrl}
          >
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "en" } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container>
            <GridBlock
              align="center"
              contents={[
                {
                  content: "Why that is good here.",
                  image: `${siteConfig.baseUrl}img/undraw_react.svg`,
                  imageAlign: "top",
                  title: "Built with XYZ"
                },
                {
                  content: `${siteConfig.title} uses Google Workbox and has a built in Service Worker to cache the app to your device and enable fast loading and offline support!`,
                  image: `${siteConfig.baseUrl}img/undraw_online.svg`,
                  imageAlign: "top",
                  title: "Offline Support"
                },
                {
                  content: `You can add ${siteConfig.title} to your homescreen and get a near native expirence. It even works on Desktop if installed via Chrome!`,
                  image: `${siteConfig.baseUrl}img/undraw_note_list.svg`,
                  imageAlign: "top",
                  title: "Full PWA"
                }
              ]}
              layout="threeColumn"
            />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
