/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/card';
import MockedCards from './src/components/card/mockedCards';
import Form from './src/components/form';
import styles from './styles';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const emptyList = <Text style={styles.emptyList}>No hay tareas</Text>;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.gray,
        }}
        data={MockedCards}
        renderItem={({item, index}) => (
          <Card
            title={`${item.title} ${index + 1}`}
            description={item.description}
            status={item.status}
          />
        )}
        ListEmptyComponent={emptyList}
      />
      <Form />
    </SafeAreaView>
  );
}

export default App;
