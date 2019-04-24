import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  state = { activeItem: '' }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={ NavLink }
          to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.setActiveItem}
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