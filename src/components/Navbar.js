import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  state = { activeItem: '' }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          as={ Link }
          to='/'
          name='Home'
        />
        <Menu.Item
          as={ NavLink }
          to='/people'
          name='People'
          active={activeItem === 'People'}
          onClick={this.setActiveItem}
        />
        <Menu.Item
          as={ NavLink }
          to='/planets'
          name='Planets'
          active={activeItem === 'Planets'}
          onClick={this.setActiveItem}
        />
      </Menu>
    )
  }
}

export default Navbar