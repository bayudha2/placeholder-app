import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from 'src/app/store';

import CardPost from '.';

const mockDelete = jest.fn();

const mockData = {
  body: 'ini body',
  id: 1,
  title: 'ini title',
  userId: 1
};

it('renders card post component', () => {
  render(
    <Provider store={store}>
      <CardPost isLoading={false} deletePost={mockDelete} dataPost={mockData} />
    </Provider>
  );

  const titleElement = screen.getByText(/ini title/i);
  const bodyElement = screen.getByText(/ini body/i);

  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});
