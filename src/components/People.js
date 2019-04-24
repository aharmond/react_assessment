import React, { Fragment, } from 'react';
import axios from 'axios';
import { Modal, Button } from 'semantic-ui-react';
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
      {people.map( (person, index) => {
        return (
          <Fragment key={index}>
            <Modal
              trigger={<Button>{person.name}</Button>}
            >
              <Person 
                url={person.url}
              />
            </Modal>
            <br />
            <br />
          </Fragment>
        )
      })}
    </>
    )
  }
}

export default People