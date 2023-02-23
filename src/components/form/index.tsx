import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Form = (props: any): JSX.Element => {
  const {tasksList, setTasksList} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const newTask = {
    title: title,
    description: description,
    status: false,
  };

  const handleOnPress = () => {
    setTasksList([...tasksList, newTask]);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView style={styles.card}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Descripción"
        style={styles.input}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.button2}>ENVIAR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
