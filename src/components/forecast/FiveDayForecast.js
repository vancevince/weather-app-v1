import React from 'react'
import './FiveDayForecast.css'
import { Card, Container, Row, Col } from 'react-bootstrap'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const FiveDayForecast = ({ data }) => {
  const dayInWeek = new Date().getDay()

  // have to offset by 1 for some reason
  const forecastDays = WEEK_DAYS.slice(dayInWeek - 1, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

  // TODO: Cards must have onClick action that will take them to the specific day clicked
  return (
    <Container>
      <Row>
        {data.list.slice(0, 5).map((item, index) => (
          <Col key={index}>
            <Card>
              <Card.Img src={`icons/${item.weather[0].icon}.svg`} />
              <Card.Title className='title'>{forecastDays[index]}</Card.Title>
              <Card.Text className='daily-item day'>
                High {Math.round(item.main.temp_max)}°F/ Low {Math.round(item.main.temp_min)}°F
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FiveDayForecast