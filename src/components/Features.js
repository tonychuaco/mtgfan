import React from 'react';

import './Features.css';

const Features = ({ fxSwap }) => {
  
  const content = [
    {
      "key": 20,
      "title": "Mighty Creatures",
    }, {
      "key": 21,
      "title": "Devastating Spells",
    }, {
      "key": 22,
      "title": "Compelling Story",
    }
  ];

  const contents = content.map((item) => {
    
    const { key, title } = item;

    // const index = content.indexOf(item);

    return (
      <article key={key} className="col-12 p-sm-0">
        <div className={`card Features-article shadow Features-article-${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="Features-article-card-body btn card-body text-light"
            data-toggle="modal" data-target="#modalCenter" onClick={() => fxSwap(key, title)}
          >
            <h3 className="card-title text-uppercase text-sm-center">{title}</h3>
          </div>
        </div>
      </article>
    )
  });

  return (
    <div className="Features" data-aos="fade-up" data-aos-easing data-aos-duration="1000" data-aos-once="true">
      <div className="card-deck row row-cols-md-3">
        {contents}
      </div>
    </div>
  );  
  
};

export default Features;