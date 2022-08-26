import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/List of user/i);
  expect(linkElement).toBeInTheDocument();
});
