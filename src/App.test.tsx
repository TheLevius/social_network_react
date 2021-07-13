import React from 'react';
import ReactDOM from 'react-dom';
import {PetfansSocialApp} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PetfansSocialApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
