import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../Garage/Garage.css'

class VehicleSelect extends React.Component {
    render() {
        let displayVehicles = this.props.getVehicles.map((val, ind) => {
            return (
                <div key={ind} >
                    <div>{val.year}</div>
                    <div>{val.make}</div>
                    <div>{val.model}</div>
                    <div><button onClick={this.handleAddButton} >add</button></div>
                </div>
            )
        })

        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Pick a car
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                  <div class="vehicle-display" >
                    {displayVehicles} 
                  </div>
                
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      }

  export default VehicleSelect