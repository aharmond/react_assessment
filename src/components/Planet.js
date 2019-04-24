import React from 'react';
import axios from 'axios';
import Person from './Person';
import { Modal, List } from 'semantic-ui-react';

class Planet extends React.Component {
  state = { 
    name: '', climate: '', population: '',
    diameter: '', gravity: '', terrain: '', 
    orbital_period: '', rotation_period: '', surface_water: '',
    residents: []
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then( res => {
      this.setState({...res.data, residents: [] })
      res.data.residents.map( resident => {
        axios.get(resident)
        .then( res => {
          this.setState({ residents: [...this.state.residents, {name: res.data.name, url: res.data.url} ] })
        })
      })
    })
  }

  render() {
    const { name, climate, population, diameter, gravity, terrain, orbital_period, rotation_period, surface_water, residents } = this.state
    return (
      <>
        <Modal.Header>
          {name}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              Population: {population} | Climate: {climate}
            </div>
            <div>
              Diameter: {diameter} | Gravity: {gravity}
            </div>
            <div>
              Terrain: {terrain} | Surface Water: {surface_water}
            </div>
            <div>
              Orbital Period: {orbital_period} | Rotation Period: {rotation_period}
            </div>
          </Modal.Description>
          <br />
          <Modal.Description>
            <List>
              {residents.map ( (resident, index) => {
                  return (
                    <Modal 
                      key={index}
                      trigger={
                        <List.Item>
                          {resident.name}
                        </List.Item>
                      }>
                      <Person url={ resident.url } />
                    </Modal>
                  )
                })
              }
            </List>
          </Modal.Description>
        </Modal.Content>
      </>
    )
  }
}

export default Planet;