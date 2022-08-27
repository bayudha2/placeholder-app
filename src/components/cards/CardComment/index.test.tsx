import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from 'src/app/store';

import CardComment from '.';

const mockDelete = jest.fn();
const mockData = {
  body: 'ini body',
  email: 'email@email.com',
  id: 1,
  name: 'ini nama',
  postId: 1
};

it('renders card comment component', () => {
  render(
    <Provider store={store}>
      <CardComment isLoading={false} deleteComment={mockDelete} dataComment={mockData} />
    </Provider>
  );

  const nameElement = screen.getByText(/ini nama/i);
  const emailElement = screen.getByText(/email@email.com/i);
  const bodyElement = screen.getByText(/ini body/i);

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});
