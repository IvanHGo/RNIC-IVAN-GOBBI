import styled from 'styled-components/native';

export const KeywordAvoid = styled.KeyboardAvoidingView`
  padding: 5px;
  margin: 10px;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Input = styled.TextInput`
  border-width: 0.5px;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;

export const SendButton = styled.TouchableOpacity`
  align-self: center;
  border-radius: 10px;
  border-width: 0.5px;
  margin: 5px;
`;
