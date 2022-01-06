import { render, screen } from '@testing-library/react';
import DogsView from './DogsList';

test('render dog list', () => {
  const container = render(
    <DogsView
      id="3"
      created_at="2021-12-24T22:54:37.497+00:00"
      name= "Althea"
      image= "https://placedog.net/500/?id=10"
      age= "1"
      bio= "High energy pooch! Would do well in an active family with another dog to keep her company."
      breed= "German Short-haired Pointer" 
    />
  );
  expect(container).toMatchSnapshot();
});