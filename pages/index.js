import React from "react";
import Link from "next/link";
import Head from "next/head";
import Fit from "../components/Fit.js";

import "../styles/style.css";

const Home = () => (
  <div>
    <Head>
      <title> Make Crap. Now not later </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Fit className="never">It will never</Fit>

    <Fit className="BePerfect">
      <span>Be </span>
      <span className="perfect bold red">perfe ct</span>
    </Fit>
    <Fit>Match your</Fit>
    <Fit className="vision bold">vision</Fit>
    <Fit>OR Live up to your</Fit>
    <Fit className="expect bold red">expectations</Fit>
    <Fit>You will never find the</Fit>
    <Fit>
      <span className="perfect red bold">Perfect </span>
      <span>Font</span>
    </Fit>
    <Fit>Best Color Palette</Fit>

    <Fit>Most flexible Tool</Fit>
    <Fit>Greatest Workflow</Fit>
    <Fit>or the Most Productive Process</Fit>
    <Fit>
      <span>SO </span>
      <span className="stop red bold">STOP</span>
    </Fit>
    <Fit>worrying</Fit>
    <Fit>AND OBSESing</Fit>
    <Fit>About</Fit>
    <Fit>decoration</Fit>

    <Fit className="perfect bold red">perfection</Fit>
    <Fit className="And">and</Fit>
    <Fit>getting attention</Fit>
    <Fit>
      <span className="bold focus">Focus </span>
      <span>On</span>
    </Fit>
    <Fit className="bold red creating">creating</Fit>
    <Fit>growing</Fit>
    <Fit className="And">and</Fit>
    <Fit className="sharing bold red">sharing</Fit>
    <Fit>
      <span>what you </span>
      <span className="bold red make">make</span>
    </Fit>
    <Fit>Because</Fit>
    <Fit>The only way to get </Fit>
    <Fit className="bold red better">better </Fit>
    <Fit className="IsTo">is to </Fit>
    <Fit className="bold red make-crap">make crap</Fit>
    <Fit className="now bold red">NOW</Fit>
    <Fit className="later bold">NOT LATER</Fit>
    <div className="meta">
      <div className="feedback">
        <span>By</span>
        <a href="http://twitter.com/k_2052">@k_2052 &nbsp;</a>
      </div>
    </div>
  </div>
);

export default Home;
