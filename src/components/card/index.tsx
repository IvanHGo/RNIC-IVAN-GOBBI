import React from 'react';
import {TouchableOpacity} from 'react-native';
import EditIcon from '../../assets/icons/edit';
import ToggleOff from '../../assets/icons/toggleOff';
import ToggleOn from '../../assets/icons/toggleOn';
import TrashcanIcon from '../../assets/icons/trashcan';
import {
  Container,
  Description,
  IconContainer,
  Status,
  Title,
  ViewContainer,
} from './styles';

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
      <Container>
        <Status>{status === true ? 'Realizado' : 'No realizado'}</Status>
        <IconContainer>
          <TouchableOpacity>
            <TrashcanIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            {status === true ? <ToggleOn /> : <ToggleOff />}
          </TouchableOpacity>
        </IconContainer>
      </Container>
    </ViewContainer>
  );
};

export default Card;
