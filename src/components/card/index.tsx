import React from 'react';
import {Description, Status, Title, ViewContainer} from './styles';

interface CardProps {
  title: string;
  description: string;
  status: boolean;
}

const Card = (props: CardProps): JSX.Element => {
  const {title, description, status} = props;
  return (
    <ViewContainer>
      <Title>{title}</Title>
      <Description numberOfLines={3}>{description}</Description>
      <Status>{status === true ? 'Realizado' : 'No realizado'}</Status>
    </ViewContainer>
  );
};

export default Card;
