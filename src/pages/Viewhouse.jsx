import React, { useState, useEffect } from 'react';
import { Image, Icon, Container, Message } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const Viewhouse = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(`https://backend-green-eta.vercel.app/${id}`);
        if (response.status === 200) {
          setHouse(response.data);
        } else {
          setError('Could not fetch house data.');
        }
      } catch (error) {
        console.error('Error fetching Houses:', error.message);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    }
    fetchHouse();
  }, [id]);

  const renderHouseContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <Message negative>{error}</Message>;
    }

    if (!house) {
      return <Message negative>No house data available.</Message>;
    }

    return (
      <div>
        <div className='imagediv' style={{ textAlign: 'center', marginBottom: '20px', height: '300px' }}>
          <Image src={house.images} wrapped ui={false} style={{ objectFit: 'cover', width: '100%', height: '100%' }} size='medium' />
        </div>
        <div className='contentdiv' style={{ textAlign: 'center' }}>
          <h2>{house.title}</h2>
          <p>Owner: {house.owner}</p>
          <p>
            <Icon name="map marker alternate" size="large" />
            <span>{house.location}</span>
          </p>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Bathrooms: {house.bathrooms}</p>
          <p>Price: ${house.price}</p>
          <p>Description: {house.description}</p>
          {house.phoneNumber && (
            <p>
              <Icon name="phone" />
              {house.phoneNumber}
            </p>
          )}
          {house.whatsApp && (
            <p>
              <Icon name="whatsapp" />
              {house.whatsApp}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flexGrow: 1, background: '#f2f2f2', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ maxWidth: '600px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
          {renderHouseContent()}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Viewhouse;
