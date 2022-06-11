import React from 'react'
import "./Modal.css"

export default function Modal(props) {

  return (
    <div>
      <div className="overlay position-absolute">
          <div className="modal-wrapper position-absolute rounded 
          bg-light">
              <button 
              onClick={() => props.close()}
              className="close-modal btn btn-danger mb-3">
              X</button>

              <div className="modal-content">
                  <h2 className="text-center">No blanks</h2>
                  <p>
                      Please enter something in the field before 
                      submission.
                  </p>
              </div>
          </div>
      </div>
    </div>
  )

}