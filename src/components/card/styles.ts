import styled from 'styled-components/native';

export const ViewContainer = styled.View`
  padding: 5px;
  margin: 10px;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-weight: 700;
  font-size: 24px;
  font-family: 'Lato-Regular';
`;

export const Description = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-family: 'Lato-Regular';
`;

export const Status = styled.Text`
  padding: 5px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.black};
  font-family: 'Lato-Italic';
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  padding: 5px;
`;
