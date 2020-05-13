import React from 'react';

import Features from './Features';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({ fxSwap }) => (

  <section id="about" className="About min-vh-100 d-flex flex-column align-items-center"> 
    <div className="container-fluid jumbotron bg-transparent mb-0 pb-0 pb-sm-auto mb-sm-5">
      <Features fxSwap={fxSwap} />
    </div>
    <div className="container px-sm-0 d-flex flex-column jumbotron bg-transparent mt-0 mt-sm-auto py-0 py-sm-auto col-xl-7 pb-sm-5 mb-sm-0" data-aos="fade-left" data-aos-easing data-aos-duration="1000"  data-aos-once="true">
      <h2 className="display-4 text-center text-capitalize mb-sm-5">About Magic<span className="text-muted"> The Gathering</span></h2>
      <p className="lead">Premiering in 1993, Magic The Gathering is an iconic trading card game that features enchanting fantasy artwork, captivating storyline, and addictive gaming experience. Filled with visual splendor and irresistible fantasy lore, Magic brings a touch of modernity to fantasy art, depicting a fresh look on magical creatures and supernatural themes with a contemporary appeal. Within a game, each player assumes the role of a powerful wizard within a Magic universe--the multiverse, equipped with powerful summoning spells, enchantments, and sorceries. </p>
    </div>
    <a href="https://magic.wizards.com/en" title="Magic The Gathering Official Site" className="mb-sm-5 btn btn-outline-secondary btn-block col-8 col-sm-6 col-xl-4 rounded-0 align-self-center text-uppercase font-weight-light" data-aos="fade-left" data-aos-easing data-aos-duration="1000"  data-aos-once="true">Learn More <FontAwesomeIcon icon={faExternalLinkAlt}  data-aos-once="true" /></a>
  </section>

);

export default About;