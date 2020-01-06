import React from 'react';
import PropTypes from 'prop-types';
import { SegmentContainer, Item, Title, Text } from './styles';

const formatDate = val => {
  const date = new Date(val);
  const min = `0${new Date(date).getUTCMinutes()}`.slice(-2);
  const hour = `0${new Date(date).getUTCHours()}`.slice(-2);
  return `${hour}:${min}`;
};

const getTimePeriod = min => `${Math.floor(min / 60)}ч ${min % 60}м`;

const getEndTime = (start, time) => {
  return new Date(start).getTime() + time * 60 * 1000;
};

const Segment = props => {
  const { origin, destination, stops, date, duration } = props;
  const destTime = getEndTime(date, duration);
  return (
    <SegmentContainer>
      <Item>
        <Title>{`${origin} - ${destination}`}</Title>
        <Text>{`${formatDate(date)} - ${formatDate(destTime)}`}</Text>
      </Item>
      <Item>
        <Title>в пути</Title>
        <Text>{getTimePeriod(duration)}</Text>
      </Item>
      <Item>
        <Title>{`${stops.length} пересадки`}</Title>
        <Text>{stops.join(', ')}</Text>
      </Item>
    </SegmentContainer>
  );
};

Segment.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  stops: PropTypes.instanceOf(Array).isRequired,
};

export default Segment;
