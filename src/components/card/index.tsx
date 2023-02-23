import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface CardProps {
  title: string;
  description: string;
  status: boolean;
}

const Card = (props: CardProps): JSX.Element => {
  const {title, description, status} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={3} style={styles.description}>
        {description}
      </Text>
      <Text style={styles.status}>
        {status === true ? 'Realizado' : 'No realizado'}
      </Text>
    </View>
  );
};

export default Card;
