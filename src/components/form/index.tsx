import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Form = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.card}>
      <TextInput placeholder="Título" style={styles.input} />
      <TextInput placeholder="Descripción" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button2}>ENVIAR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
