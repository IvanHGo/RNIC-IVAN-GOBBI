import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  card: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
  description: {
    marginTop: 5,
    fontSize: 18,
  },
  status: {
    fontSize: 18,
    padding: 5,
    color: 'black',
    fontFamily: 'Lato-Italic',
  },
});

export default styles;
