import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuExampleInvertedSecondary from './Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <Link to="/">
          <Header as="h1" color="red">
            Home Haven
          </Header>
        </Link>
        <MenuExampleInvertedSecondary />
      </Container>
    </div>
  );
};

export default Navbar;
