import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

const MenuExampleInvertedSecondary = () => {
  const { pathname } = useLocation();

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={pathname === '/'}
        />

        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/signup"
            name="signup"
            active={pathname === '/signup'}
          />
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={pathname === '/login'}
          />
          <Menu.Item
            as={Link}
            to="/addHouse"
            name="Add a Listing"
            active={pathname === '/addHouse'}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default MenuExampleInvertedSecondary;
