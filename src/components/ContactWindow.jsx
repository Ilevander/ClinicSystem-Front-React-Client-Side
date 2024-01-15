import React from 'react';

const ContactWindow = () => {
  return (
    <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header ftco-degree-bg">
            <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="ion-ios-close"></span>
            </button>
          </div>
          <div className="modal-body pt-md-0 pb-md-5 text-center">
            <h2>You've Got Mail!</h2>
            <div className="icon d-flex align-items-center justify-content-center">
              <img src="images/email.svg" alt="" className="img-fluid" />
            </div>
            <h4 className="mb-2">We sent confirmation link to:</h4>
            <h3>johndoe<span>@</span>gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
