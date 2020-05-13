import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Main from "./components/Main";
import Footer from './components/Footer';

import FeaturesModal from './components/FeaturesModal';

// local data for testing
import data from './data/data.json';

import img1 from './images/magic-set-Guilds-of-Ravnica.jpg';
import img2 from './images/magic-set-Core-Set-2019.jpg';
import img3 from './images/magic-set-Dominaria.jpg';
import img4 from './images/magic-set-Rivals-of-Ixalan.jpg';
import img5 from './images/magic-set-Ixalan.jpg';
import img6 from './images/magic-set-Hour-of-Devastation.jpg';
import img7 from './images/magic-set-Amonkhet.jpg';
import img8 from './images/magic-set-Aether-Revolt.jpg';
import img9 from './images/magic-set-Kaladesh.jpg';
import img10 from './images/magic-set-Eldritch-Moon.jpg';
import img11 from './images/magic-set-Shadows-over-Innistrad.jpg';
import img12 from './images/magic-set-Oath-of-the-Gatewatch.jpg';
import img13 from './images/battle-for-zendikar.jpg';
import img14 from './images/magic-origins.jpg';
import img15 from './images/fate-reforged.jpg';
import img16 from './images/khans-of-tarkir.jpg';
import img17 from './images/magic-2015-core-set.jpg';
import img18 from './images/journey-into-nyx.jpg';
import img19 from './images/born-of-the-gods.jpg';
import img20 from './images/theros.jpg';

import img21 from './images/mighty-creatures.jpg';
import img22 from './images/devastating-spells.jpg';
import img23 from './images/compelling-story.jpg';

import img24 from './images/blue.jpg';
import img25 from './images/white.jpg';
import img26 from './images/green.jpg';
import img27 from './images/red.jpg';
import img28 from './images/black.jpg';

export default class App extends Component {

  state = {

    // local data for testing
    // cards: data.cards,
    cards: data.cards,

    modal: null,
    modalTitle: null,
    images: [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
      img21, img22, img23, img24, img25, img26, img27, img28
    ],
  };

  componentDidMount() {

    fetch('https://api.magicthegathering.io/v1/cards?pageSize=10&random=true&language=english')
      .then(res => {return res.json();})
      .then(data => {
        this.setState({
          cards: data.cards,
        });
      });

  }

  fxSwap = (index, title) => {
    this.setState({
      modal: this.state.images[index],
      modalTitle: title,
    });
  }

  render() {

    const { cards, modal, modalTitle } = this.state;

    return (
      <div className="App">
        <Header/>
        <Main cards={cards} fxSwap={this.fxSwap} />
        <FeaturesModal modal={modal} modalTitle={modalTitle} />
        <Footer />
      </div>
    );
  }
}