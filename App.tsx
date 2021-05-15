import React from 'react';
import { Text, useColorScheme, View, StyleSheet } from 'react-native';
import Theme from './src/Theme';

const App = () => {
  const appearanceMode = useColorScheme();

  return (
    <Theme>
      <View style={styles.container}>
        <Text>{appearanceMode}</Text>
      </View>
    </Theme>
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
