import React from 'react';

const FeaturesModal = ({ modal, modalTitle }) => (
  <div className="modal fade" id="modalCenter" tabIndex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content rounded-0 bg-dark text-light shadow">
        <div className="modal-header border-bottom border-danger">
          <h5 className="modal-title text-uppercase font-weight-light" id="modalCenterTitle">{modalTitle}</h5>
          <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img className="img-fluid" src={modal} alt="##" />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesModal;