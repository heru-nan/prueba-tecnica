import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

import {ChakraProvider} from '@chakra-ui/react';

Meteor.startup(() => {
  render(<WithChakra />, document.getElementById('react-target'));
});

const WithChakra = () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
)