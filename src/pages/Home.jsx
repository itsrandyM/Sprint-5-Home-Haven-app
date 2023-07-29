import React, { useState, useEffect } from 'react';
import { Card, Image, Icon, Container, ImageGroup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';

const Home = () => {
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('http://localhost:4000');
        const json = await response.json();
        if (response.ok) {
          setHouses(json);
        }
      } catch (error) {
        console.error('Error fetching Houses:', error.message);
      }
    };
    fetchHouses();
  }, []);

  return (
    <div>
      <Navbar />
      <Container style={{ width: '50%', margin: '40px auto 0' }}>
        <div className="Home">
          {houses &&
            houses.map((house) => (
              <Card key={house._id} className='custom-card' style={{ width: '100%' }}>
                <Card.Content>
                  <ImageGroup size='medium'>
                    {house.images.map((image, index) => (
                      <Image key={index} src={house.images} wrapped ui={false} style={{ objectFit: 'cover' }} />
                    ))}
                  </ImageGroup>
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
                  <Link to={`/viewhouse/${house._id}`}>Learn More</Link>
                </Card.Content>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
