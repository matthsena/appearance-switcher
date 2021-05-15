import React from 'react';
import { useColorScheme, Dimensions } from 'react-native';
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

        <Text>{appearanceMode}</Text>
      </Container>
    </Theme>
  );
};

export default App;
