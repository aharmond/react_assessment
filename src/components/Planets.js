import React, { Fragment, } from 'react';
import axios from 'axios';
import { Modal, Button, } from 'semantic-ui-react';
import Planet from './Planet';

class Planets extends React.Component {
  state = { planets: [], }

  componentDidMount() {
    axios.get(`https://swapi.co/api/planets`)
    .then( res => {
      this.setState({ planets: res.data.results })
      axios.get(res.data.next)
      .then( res => {
        this.setState({ planets: [...this.state.planets, ...res.data.results]})
        axios.get(res.data.next)
        .then( res => {
          this.setState({ planets: [...this.state.planets, ...res.data.results]})
          axios.get(res.data.next)
          .then( res => {
            this.setState({ planets: [...this.state.planets, ...res.data.results]})
            axios.get(res.data.next)
            .then( res => {
              this.setState({ planets: [...this.state.planets, ...res.data.results]})
              axios.get(res.data.next)
              .then( res => {
                this.setState({ planets: [...this.state.planets, ...res.data.results]})
                axios.get(res.data.next)
                .then( res => {
                  this.setState({ planets: [...this.state.planets, ...res.data.results]})
                })
              })
            })
          })
        })
      })
    })
  }

  render() {
    const { planets } = this.state
    return(
      <>
      <div>List of Planets</div>
      <br />
      {planets.map( (planet, index) => {
        return (
          <Fragment key={index}>
            <Modal
              trigger={<Button>{planet.name}</Button>}
            >
              <Planet 
                url={planet.url}
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


export default Planets