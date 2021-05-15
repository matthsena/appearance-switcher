import React from 'react';
import {
  Text,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  const appearanceMode = useColorScheme();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={appearanceMode === 'light' ? 'light-content' : 'dark-content'}
      />

      <Text>{appearanceMode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
