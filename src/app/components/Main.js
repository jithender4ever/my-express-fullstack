import { store } from '../../store/index';
import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from "./Dashboard";

export const Main = () => {
  return (
      <Provider store={store}>
          <Dashboard />
      </Provider>
  )
};
