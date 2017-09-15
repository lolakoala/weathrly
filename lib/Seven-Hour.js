import React from 'react';
import Card from './Card.js';

export default class SevenHour extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      // console.log(this.props.weather.hourlyInfo)
      <div>
        <ul>
          {this.props.weather.hourlyInfo.map((obj) => {
            return <Card
              timeFrame={obj.FCTTIME.hour}
              condition={obj.condition}
              img={obj.icon_url}
              temp={obj.temp.english} />;
          })}
        </ul>
      </div>
    );
  }
}