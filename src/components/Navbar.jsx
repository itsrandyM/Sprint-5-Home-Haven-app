import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuExampleInvertedSecondary from './Menu';

const Navbar = () => {
  const headerStyle = {
    fontFamily: "'Abel', sans-serif",
    fontWeight: 800,
    fontSize: '3rem', 
    color: 'red',
  }
  return (
    <div className="navbar">
      <Container>
        <Link to="/">
          <Header as="h1" style={headerStyle} >
            Home Haven
          </Header>
        </Link>
        <MenuExampleInvertedSecondary />
      </Container>
    </div>
  );
};

export default Navbar;
