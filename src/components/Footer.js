import React from 'react';

import Reference from './Reference';

const Footer = () => {

  let copyrightYear = new Date();
  copyrightYear = copyrightYear.getFullYear();

  return (
    <footer className="jumbotron jumbotron-fluid bg-dark text-light mb-2 pb-4">
      <Reference />    
      <div className="container text-light">
        <small className="font-weight-lighter text-muted">Copyright &copy; {copyrightYear}. Designed and Developed by Anthony Djoewanda.<br />
          <span className="font-italic">This site is unofficial Fan Content permitted under the <a className="text-muted" href="https://company.wizards.com/fancontentpolicy">Fan Content Policy</a>. 
          Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. 
          ©Wizards of the Coast LLC.</span>
        </small>
      </div>
    </footer>
  )
};

export default Footer;