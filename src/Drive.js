import React, { Component } from 'react'
import {
  Button,
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Menu,
} from 'semantic-ui-react'
import './Drive.css';

class Drive extends Component {

  state = { activeItem: 'drive' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu secondary fixed='top' size='big' style={{backgroundColor: 'white'}}>
          <Menu.Item name='Ride' active={activeItem === 'ride'} onClick={this.handleItemClick} />
          <Menu.Item name='Drive' active={activeItem === 'drive'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='HELP' active={activeItem === 'help'} onClick={this.handleItemClick} />
            <Menu.Item name='SIGN IN' active={activeItem === 'signin'} onClick={this.handleItemClick} />
            <Menu.Item name='BECOME A DRIVER' active={activeItem === 'bedriver'} onClick={this.handleItemClick} />
            <Menu.Item>
              <Icon name='sidebar' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div style={{paddingTop: '3.6em'}}>
          <div style={{width: '13em', padding: 20, position: 'fixed', }}>
            <Button basic color='olive' icon size='big'>
              Start driving with Wuji
              <br />
              <br />
              {'Sign up '}
              <Icon name='signup' />
            </Button>
          </div>
          <div className='App-header'>
            <Container>
              <Header inverted as='h1'>Work that puts you first</Header>
              <Header inverted as='h2'>Drive when you want, earn what you need</Header>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '80em', padding: 20}}>
                  <Divider inverted horizontal>Set your own schedule</Divider>
                  <p>You can drive with Uber anytime, day or night, 365 days a year. When you drive is always up to you, so it never interferes with the important things in your life.</p>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Divider inverted  horizontal>Earn more at every turn</Divider>
                  <p>Trip fares start with a base amount, then increase with time and distance. And when demand is higher than normal, drivers earn more.</p>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Divider inverted  horizontal>Let the app lead the way</Divider>
                  <p>Just tap and go. You’ll get turn-by-turn directions, tools to help you earn more, and 24/7 support. And if you don’t have a smartphone, we can connect you to one.</p>
                </div>
              </div>
            </Container>
          </div>
          <div style={{padding: '20px'}}>
            <Container>
              <Header as='h4'>Hit the road</Header>
              <Header as='h2'>It’s easy to get started</Header>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '80em', padding: 20}}>
                  <Label circular color='olive' style={{ display: 'flex'}}>1 Hit the road</Label>
                  <Divider hidden />
                  <p>Tell us a little about yourself and your car. Vehicle requirements vary by region, so we’ll show you what’s needed for your city.</p>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Label circular color='olive' style={{ display: 'flex'}}>2 Share some documents</Label>
                  <Divider hidden />
                  <p>Just upload your license, registration, proof of insurance, and the necessary information to start a driver screening.</p>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Label circular color='olive' style={{ display: 'flex'}}>3 Get the app and go</Label>
                  <Divider hidden />
                  <p>Once you’re approved to drive with Uber as an independent contractor, we’ll provide everything you need to be a success on the road.</p>
                </div>
              </div>
              <Button color='olive' icon size='big'>
                {'Sign up '}
                <Icon name='signup' />
              </Button>
            </Container>
          </div>
          <div className='App-header'>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <div style={{padding: 20}}>
              <Card>
                <Card.Content>
                  <Card.Meta>
                    About the app
                  </Card.Meta>
                  <Card.Header>
                    Designed just for drivers
                  </Card.Header>
                  <Card.Description>
                    When you want to make money, just open the app and you’ll start to receive trip requests. You’ll get information about your rider and directions to their location and destination. When the trip is over, you’ll receive another nearby request. And if you're ready to get off the road, you can sign off at any time.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    SEE HOW IT WORKS
                    <Icon name='right angle' />
                  </a>
                </Card.Content>
              </Card></div>
              <div style={{padding: 20}}>
              <Card>
                <Card.Content>
                  <Card.Meta>
                    About the app
                  </Card.Meta>
                  <Card.Header>
                    Designed just for drivers
                  </Card.Header>
                  <Card.Description>
                    When you want to make money, just open the app and you’ll start to receive trip requests. You’ll get information about your rider and directions to their location and destination. When the trip is over, you’ll receive another nearby request. And if you're ready to get off the road, you can sign off at any time.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    SEE HOW IT WORKS
                    <Icon name='right angle' />
                  </a>
                </Card.Content>
              </Card></div>
            </div>
          </div>
          <div style={{padding: '20px'}}>
            <Container>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Requirements</Header>
                  <Divider />
                  <p>Know you’re ready to hit the road. Whether you’re driving your own car or a commercially-licensed vehicle, you must meet the minimum requirements and complete a safety screening online.</p>
                  <a>
                    GET THE DETAILS
                    <Icon name='right angle' />
                  </a>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Vehicle solutions</Header>
                  <Divider />
                  <p>Need a car? We can connect you to partners who offer exclusive vehicle deals that can get you on the road and earning. Many offer no mileage caps and flexible return policies so you can drive and earn as much as you want.</p>
                  <a>
                    VIEW YOUR OPTIONS
                    <Icon name='right angle' />
                  </a>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Insurance</Header>
                  <Divider />
                  <p>Uber maintains insurance policies that provide coverage for drivers from the time they accept a trip until they reach the rider’s destination.</p>
                  <a>
                    SEE POLICY COVERAGE
                    <Icon name='right angle' />
                  </a>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Safety</Header>
                  <Divider />
                  <p>When you drive with Uber, you get 24/7 driver support and insurance coverage. And all riders are verified with their personal information and phone number, so you’ll know who you’re picking up and so will we.</p>
                  <a>
                    HOW WE KEEP YOU SAFE
                    <Icon name='right angle' />
                  </a>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Rewards</Header>
                  <Divider />
                  <p>You’re in the driver’s seat. So reward yourself with discounts on fuel, vehicle maintenance, cell phone bills, and more. Reduce your daily expenses and take home extra earnings by driving more.</p>
                  <a>
                    SEE DISCOUNTS
                    <Icon name='right angle' />
                  </a>
                </div>
                <div style={{width: '80em', padding: 20}}>
                  <Header as='h3'>Delivery</Header>
                  <Divider />
                  <p>Grab your bike, scooter, or car and boost your earnings by making deliveries with Uber. Enjoy a flexible schedule and quick earning potential all while cruising around town.</p>
                  <a>
                    MORE ABOUT DELIVERY
                    <Icon name='right angle' />
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    )
  }

}


export default Drive;
