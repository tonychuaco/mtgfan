import React from 'react';

import './Media.css';

const Media = ({ fxSwap }) => {
  
  const content = [
    {
      "key": 23,
      "title": "Blue",
    }, {
      "key": 24,
      "title": "White",
    }, {
      "key": 25,
      "title": "Green",
    }, {
      "key": 26,
      "title": "Red",
    }, {
      "key": 27,
      "title": "Black",
    }
  ];

  const contents = content.map((item) => {
    
    const { key, title } = item;

    // const index = content.indexOf(item);

    return (
      <article key={key} className="col-12 p-0">
        <div className={`card rounded-0 Media-article shadow Media-article-${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="Media-article-card card-body btn text-light" data-toggle="modal" data-target="#modalCenter" onClick={() => fxSwap(key, title)}>
            <h3 className="card-title text-sm-center text-uppercase pt-5" data-aos="fade-left" data-aos-easing data-aos-duration="1000"  data-aos-once="true">{title}</h3>
          </div>
        </div>
      </article>
    )
  });

  return (
    <section className="Media container-fluid mt-5">
      <div className="card-group row row-cols-lg-5">
        {contents}
      </div>
    </section>
  );  
  
};

export default Media;