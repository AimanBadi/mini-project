import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import MainForm from './components/MainForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        w="container.lg"
        h="container.lg"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MainForm />
      </Container>
    </ChakraProvider>
  );
}

export default App;
