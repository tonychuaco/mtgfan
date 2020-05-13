import React from 'react';

import About from './About';
import Media from './Media';
import AboutMtg from './AboutMtg';
import Explore from './Explore';


const Main = ({ cards, fxSwap }) => (
  <main>
    <About fxSwap={fxSwap} />
    <Media fxSwap={fxSwap} />
    <AboutMtg fxSwap={fxSwap} />
    <Explore cards={cards} />
  </main>
);

export default Main;