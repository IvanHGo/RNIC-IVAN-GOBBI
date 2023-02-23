import React, {useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import {FormProps} from './types';

const Form = (props: FormProps): JSX.Element => {
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

  const secondInput = useRef<TextInput>(null);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={styles.card}>
        <TextInput
          placeholder="Título"
          style={styles.input}
          returnKeyType={'next'}
          onChangeText={setTitle}
          onSubmitEditing={() => {
            secondInput.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="Descripción"
          style={styles.input}
          ref={secondInput}
          onChangeText={setDescription}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.button2}>ENVIAR</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Form;
