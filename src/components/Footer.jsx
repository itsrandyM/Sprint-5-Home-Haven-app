import React from 'react';
import { Grid, Header, List, Segment, Container } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              We offer a platform to which house renters and house hunters alike come together.
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='p'>Helps you find a home</List.Item>
                <List.Item as='p'>Interact with different home owners</List.Item>
                <List.Item as='p'>Interact with house hunters</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Home Haven
              </Header>
              <p>
                Seeking to offer the best online platform for hpuse hunting and Real Estate services
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
