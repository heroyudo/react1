import React from "react";
import Button1 from "./Button1";
import "../styles/EditModal.css"

class EditModal extends React.Component {
  render() {
    const {edit, close, data, change, update} = this.props;
    if (edit) {
        return (
            <div className="modal-container">
              <div className="modal-box">
                  <h3>Edit Task</h3>
                  <div className="input">
                      <input 
                      type="text" 
                      value={data.title} 
                      onChange={change}
                      />
                  </div>
                  <div className="btn-group">
                      <Button1 text="OK" variant="primary"
                        action={update}
                      /> 
                      <Button1 text="cancel" variant="warning" 
                      action={close}
                      /> 
                  </div>
              </div>
            </div>
          )
        } else {
            return null
        }
    }    
  }


export default EditModal;
