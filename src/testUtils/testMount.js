import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const testMount = (Component, store = {}) => mount(<Provider store={store}>{Component}</Provider>);

export default testMount;
