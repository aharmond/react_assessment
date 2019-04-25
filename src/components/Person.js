import React from 'react';
import axios from 'axios';
import Planet from './Planet';
import { Modal, } from 'semantic-ui-react';

class Person extends React.Component {
  state = { 
    name: '', birth_year: '', gender: '', 
    eye_color: '', hair_color: '', skin_color: '',
    height: '', mass: '',
    homeworld: '', homeworld_url: '', species: '',
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then( res => {
      this.setState( res.data )
      axios.get(res.data.homeworld)
      .then( res => {
        this.setState({ homeworld: res.data.name, homeworld_url: res.data.url })
      })
      axios.get(res.data.species)
      .then( res => { 
        this.setState({ species: res.data.name })
      })
    })
  }

  render() {
    const { name, birth_year, gender, eye_color, hair_color, skin_color, height, mass, homeworld, homeworld_url, species } = this.state
    return (
      <>
        <Modal.Header>
          {name}
        </Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <div>
              Gender: {gender} | Birth Year: {birth_year}
            </div>
            <div>
              Species: {species} | Homeworld: 
                <Modal trigger={<a> {homeworld} </a>}>
                  <Planet url={homeworld_url} />
                </Modal>
            </div>
            <div>
              Height: {height} | Mass: {mass}
            </div>
            <div>
              Eye Color: {eye_color} | Skin Color: {skin_color} | Hair Color: {hair_color}
            </div>
          </Modal.Description>
        </Modal.Content>
      </>
    )
  }
}

export default Person;