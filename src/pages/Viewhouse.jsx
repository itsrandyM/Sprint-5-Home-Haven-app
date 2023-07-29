import React, { useState, useEffect } from 'react';
import { Card, Image, Icon, Container } from 'semantic-ui-react';
import '../App.css';

const Viewhouse = () => {
  const [houses, setHouses] = useState(null);

  const fetchHouses = async () => {
    try {
      const response = await fetch('http://localhost:4000');
      if (response.status === 200) {
        const json = await response.json();
        setHouses(json);
      }
    } catch (error) {
      console.error('Error fetching Houses:', error.message);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const renderHouseCards = () => {
    if (!houses) {
      return null;
    }

    return houses.map((house) => (
      <Card key={house._id} className='custom-card'>
        <Image src={house.images} wrapped ui={false} style={{ objectFit: 'cover' }} />
        <Card.Content>
          <Card.Header>{house.title}</Card.Header>
          <Card.Meta>Owner: {house.owner}</Card.Meta>
          <Card.Description>
            <Icon name="map marker alternate" size="large" />
            <span>{house.location}</span>
          </Card.Description>
          <Card.Meta>Bedrooms: {house.bedrooms}</Card.Meta>
          <Card.Meta>Bathrooms: {house.bathrooms}</Card.Meta>
          <Card.Meta>Price: ${house.price}</Card.Meta>
          <Card.Description>Description: {house.description}</Card.Description>
          {house.phoneNumber && (
            <Card.Description>
              <Icon name="phone" />
              {house.phoneNumber}
            </Card.Description>
          )}
          {house.whatsApp && (
            <Card.Description>
              <Icon name="whatsapp" />
              {house.whatsApp}
            </Card.Description>
          )}
        </Card.Content>
      </Card>
    ));
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="Home" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f2f2f2', padding: '20px', borderRadius: '8px' }}>
        {renderHouseCards()}
      </div>
    </Container>
  );
};



export default Viewhouse