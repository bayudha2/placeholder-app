import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { store } from 'src/app/store';

import CardUser from '.';

const mockData = {
  address: {
    city: 'jakarta',
    street: 'street 21',
    suite: 'suite'
  },
  company: {
    name: 'nama perushaan'
  },
  email: 'eve@holt.cris',
  id: 1,
  name: 'ini nama',
  phone: '082123123123',
  username: 'username',
  website: 'websiteku.com'
};

it('renders card user component', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CardUser {...mockData} />
      </MemoryRouter>
    </Provider>
  );

  const nameElement = screen.getByText(/ini nama/i);
  const emailElement = screen.getByText(/eve@holt.cris/i);

  expect(emailElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
});
