import React from 'react';
import { useColorScheme, Dimensions, StyleSheet } from 'react-native';
import Theme from './src/Theme';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';
import Sun from './src/sources/sun.svg';
import Moon from './src/sources/moon.svg';

const { width } = Dimensions.get('window');

const App = () => {
  const appearanceMode = useColorScheme();

  return (
    <Theme>
      <Container>
        {appearanceMode === 'light' ? (
          <Sun width={width * 0.25} height={width * 0.25} fill={'#ff9800'} />
        ) : (
          <Moon width={width * 0.25} height={width * 0.25} fill={'#6200ee'} />
        )}

        <Text style={styles.text}>Modo {appearanceMode}</Text>
      </Container>
    </Theme>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 16,
  },
});

export default App;
