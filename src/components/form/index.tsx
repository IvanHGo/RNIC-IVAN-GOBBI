import React, {useRef, useState} from 'react';
import {Keyboard, TextInput, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from 'styled-components/native';
import CheckComponent from '../../assets/icons/check';
import {Input, KeywordAvoid, SendButton} from './styles';
import {FormProps} from './types';

const Form = (props: FormProps): JSX.Element => {
  const {tasksList, setTasksList} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const theme = useTheme();

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
      <KeywordAvoid>
        <Input
          placeholder="Título"
          returnKeyType={'next'}
          onChangeText={setTitle}
          onSubmitEditing={() => {
            secondInput.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          placeholder="Descripción"
          ref={secondInput}
          onChangeText={setDescription}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
        <SendButton onPress={handleOnPress}>
          <CheckComponent fill={theme.colors.success} />
        </SendButton>
      </KeywordAvoid>
    </TouchableWithoutFeedback>
  );
};

export default Form;
