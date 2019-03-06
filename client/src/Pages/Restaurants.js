import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Restaurants = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
          Yowl
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>Restaurant List</Dropdown.Item>
            <Dropdown.Item>Restaurant Map</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Cusines</span>
              <Dropdown.Menu>
                <Dropdown.Item>BBQ</Dropdown.Item>
                <Dropdown.Item>Mexican</Dropdown.Item>
                <Dropdown.Item>Italian</Dropdown.Item>
                <Dropdown.Item>Sushi</Dropdown.Item>
                <Dropdown.Item>Thai</Dropdown.Item>
                <Dropdown.Item>Chinese</Dropdown.Item>
                <Dropdown.Item>Veitnamese</Dropdown.Item>
                <Dropdown.Item>French</Dropdown.Item>
                <Dropdown.Item>Indian</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>This Can Be Whatever We Want!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>..."Food tells you a story about a person. Where they have been, who they are, what their experiences in life have been"...</Header>
      <p>Our aim is to connect you with that story.</p>
      <p>
        <b>I AM BARACK OBAMA</b>
      </p>

      {/* <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} /> */}
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Yowl' />
            <List link inverted>
              <List.Item as='a'>Careers</List.Item>
              <List.Item as='a'>Press</List.Item>
              <List.Item as='a'>Policies</List.Item>
              <List.Item as='a'>Help</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Site Map' />
            <List link inverted>
              <List.Item as='a'>Home</List.Item>
              <List.Item as='a'>About Us</List.Item>
              <List.Item as='a'>Restaurants</List.Item>
              <List.Item as='a'>Map</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Become A Food Critic!' />
            <List link inverted>
              <List.Item as='a'>Learn More</List.Item>
              <List.Item as='a'>Food Critic Profiles</List.Item>
              <List.Item as='a'>How We Review</List.Item>
              <List.Item as='a'></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        {/* <Image centered size='mini' src='/logo.png' /> */}
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Restaurants;