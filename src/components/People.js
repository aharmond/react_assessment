import React, { Fragment, } from 'react';
import axios from 'axios';
import { Modal, Button, Grid } from 'semantic-ui-react';
import Person from './Person';

class People extends React.Component {
  state = { people: [], }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people`)
    .then( res => {
      this.setState({ people: res.data.results })
      axios.get(res.data.next)
      .then( res => {
        this.setState({ people: [...this.state.people, ...res.data.results] })
        axios.get(res.data.next)
        .then( res => {
          this.setState({ people: [...this.state.people, ...res.data.results] })
          axios.get(res.data.next)
          .then( res => {
            this.setState({ people: [...this.state.people, ...res.data.results] })
            axios.get(res.data.next)
            .then( res => {
              this.setState({ people: [...this.state.people, ...res.data.results] })
              axios.get(res.data.next)
              .then( res => {
                this.setState({ people: [...this.state.people, ...res.data.results] })
                axios.get(res.data.next)
                .then( res => {
                  this.setState({ people: [...this.state.people, ...res.data.results] })
                  axios.get(res.data.next)
                  .then( res => {
                    this.setState({ people: [...this.state.people, ...res.data.results] })
                    axios.get(res.data.next)
                    .then( res => {
                      this.setState({ people: [...this.state.people, ...res.data.results] })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }

  render() {
    const { people } = this.state
    return(
      <>
        <div>List of People</div>
        <br />
        <Grid columns={10}>
          <Grid.Row>
            {people.map( (person, index) => {
              return (
                <Grid.Column key={index}>
                  <Modal
                    trigger={<Button inverted color="blue">{person.name}</Button>}
                  >
                    <Person 
                      url={person.url}
                    />
                  </Modal>
                  <br />
                  <br />
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default People