/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  AppState,
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
  const [tasksList, setTasksList] = useState(MockedCards);
  const isDarkMode = useColorScheme() === 'dark';
  const [appStateVisible, setAppStateVisible] = useState('');

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppStateVisible(nextAppState);
      if (nextAppState !== 'active') {
        setTasksList(MockedCards);
      }
    });
    return () => {
      subscription.remove();
    };
  }, [appStateVisible]);

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
        data={tasksList}
        renderItem={({item, index}) => (
          <Card
            title={`${index + 1}. ${item.title}`}
            description={item.description}
            status={item.status}
          />
        )}
        ListEmptyComponent={emptyList}
      />
      <Form tasksList={tasksList} setTasksList={setTasksList} />
    </SafeAreaView>
  );
}

export default App;
