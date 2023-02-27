import React, {useEffect, useState} from 'react';
import {
  AppState,
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/card';
import MockedCards from './src/components/card/mockedCards';
import Form from './src/components/form';
import {EmptyList} from './styles';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';

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

  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 600});
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const emptyList = <EmptyList>No hay tareas</EmptyList>;

  return (
    <ThemeProvider theme={myTheme}>
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
    </ThemeProvider>
  );
}

export default App;
