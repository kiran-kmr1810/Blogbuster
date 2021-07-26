import React from 'react';
import ReactDOM from 'react-dom';
import Path from "./path";
import { ChakraProvider,ColorModeScript } from "@chakra-ui/react"
import theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Path/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

