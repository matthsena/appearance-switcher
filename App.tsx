import React from 'react';
import { useColorScheme } from 'react-native';
import Theme from './src/Theme';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';

const App = () => {
  const appearanceMode = useColorScheme();

  return (
    <Theme>
      <Container>
        <Text>{appearanceMode}</Text>
      </Container>
    </Theme>
  );
};

export default App;
